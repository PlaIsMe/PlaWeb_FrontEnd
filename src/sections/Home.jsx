import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import forums from '../assets/images/forums.png';
import logo from '../assets/images/logo.png';
import minecraft from '../assets/images/minecraft.jpg';
import store from '../assets/images/store.png';
import vote from '../assets/images/vote.png';

const HOME_CSS = `
/* ---- SCOPE EVERYTHING UNDER .mc ---- */
.mc, .mc * { box-sizing: border-box; z-index: 1; }
.mc {
  /* You can override the image via the --bg-image variable from React inline style */
  --bg-image: url("${minecraft}");

  background:
    linear-gradient(rgba(16, 20, 26, 0.65), rgba(16, 20, 26, 0.65)),
    var(--bg-image) no-repeat center center fixed;
  background-size: cover;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  margin: 0;
  position: relative;

  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
}

.mc a { text-decoration: none; }
.mc p { margin: 0; padding: 3px; }

.mc .container { text-align: center; }

.mc .logo img {
  width: 225px;
  animation: logo 5s ease-in-out infinite;
}

@keyframes logo {
  0% { transform: scale(1); }
  50% { transform: scale(1.07); }
  100% { transform: scale(1); }
}

.mc .playercount {
  display: inline-block;
  margin: 20px 15px 15px 15px;
  padding: 2px 0;
  background-color: rgba(15, 199, 209, 0.75);
  font-size: 1em;
  color: white;
  text-align: center;
  border-radius: 5px 0 5px 0;
  line-height: 27px;
}

.mc .playercount > p > span {
  font-weight: bold;
  padding: 1px 4px;
  border-radius: 3px;
  background: rgba(9, 150, 158, 0.7);
  margin: 0 2px;
}

.mc .extrapad { padding: 0; }

.mc .ip {
  cursor: pointer;
  display: inline-block;
  color: #fff;
  text-shadow: 2px 2px 5px rgba(255,255,255,0.3);
  margin-top: 4px;
  font-weight: 600;
}

.mc .items {
  display: flex;
  justify-content: space-around;
  flex-basis: 100px;
  padding: 18px 0 10px 0;
  gap: 36px;
  flex-wrap: wrap;
}

.mc .item img {
  transition: all 0.2s ease;
  margin-bottom: 7px;
}
.mc .item img:hover { transform: scale(1.1); }

.mc .img { width: 80%; }

.mc .title { font-weight: bold; font-size: 17px; color: white; }
.mc .subtitle { color: #cfcfcf; font-size: 12px; }
.mc .title, .mc .subtitle { margin: 0; padding: 0; }

.mc .tsparticles { position: absolute; inset: 0; z-index: 0; }

/* --- Responsive tweaks --- */
@media (min-width: 400px) {
  .mc .logo img { width: 280px; }
  .mc .playercount { margin-top: 30px; padding: 5px; }
  .mc .playercount > p > span { padding: 2px 7px; }
}
@media (min-width: 1250px) {
  .mc .title { font-size: 24px; }
  .mc .subtitle { font-size: 15px; }
  .mc .logo img { width: 470px; }
  .mc .logo { margin-bottom: 23px; }
  .mc .img { width: 100%; }
  .mc .items { padding: 30px 0 20px 0; }
  .mc .playercount { font-size: 1.22em; padding: 10px; }
  .mc .extrapad { padding: 0 42.5px; }
  .mc .playercount > p > span { padding: 4px 7px; }
}
@media (min-width: 1000px) {
  .mc .items { justify-content: center; }
  .mc .item:not(:first-child) { margin-left: 90px; }
}
`;


export default function Home({
  logoSrc = logo,
  bgImage = minecraft,
  serverIp = "play.example.com",
  serverPort = "25565",
  tellUsersWhenServerIsOffline = true,
  serverOfflineText = "Server isn't online!",
  ipCopiedText = "IP copied!",
}) {
  const [copied, setCopied] = useState(false);
  const [players, setPlayers] = useState(null);
  const [offline, setOffline] = useState(false);
  const cssRef = useRef(null);

  useEffect(() => {
    if (cssRef.current) return;
    const styleEl = document.createElement("style");
    styleEl.setAttribute("data-home-css", "true");
    styleEl.textContent = HOME_CSS;
    document.head.appendChild(styleEl);
    cssRef.current = styleEl;
    return () => {
      styleEl.remove();
      cssRef.current = null;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    const fetchCount = async () => {
      try {
        const res = await fetch(`https://api.bybilly.uk/api/players/${serverIp}/${serverPort}`);
        const data = await res.json();
        if (cancelled) return;
        if (Object.prototype.hasOwnProperty.call(data, "online")) {
          setPlayers(data.online);
          setOffline(false);
        } else {
          // offline case from API
          setOffline(true);
        }
      } catch {
        // network error → hide / mark offline
        setOffline(true);
      }
    };
    fetchCount();
    const id = setInterval(fetchCount, 60_000);
    return () => { cancelled = true; clearInterval(id); };
  }, [serverIp, serverPort]);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(serverIp);
      setCopied(true);
      setTimeout(() => setCopied(false), 800);
    } catch {
      // fallback
      const ta = document.createElement("textarea");
      ta.style.position = "absolute";
      ta.style.left = "-99999px";
      ta.textContent = serverIp;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 800);
    }
  }, [serverIp]);

  // tsparticles
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);
  const particleOptions = useMemo(() => ({
    fpsLimit: 100,
    particles: {
      number: { value: 100, density: { enable: true } },
      color: { value: ["#ffffff", "#d4f4fc", "#dfebed"] },
      opacity: { value: { min: 0.1, max: 0.5 } },
      size: { value: { min: 0.7, max: 2 } },
      move: { enable: true, speed: 1.5, random: false },
    },
    detectRetina: true,
    background: { color: "transparent" },
  }), []);

  const playerBanner = useMemo(() => {
    if (offline) {
      return tellUsersWhenServerIsOffline ? serverOfflineText : (
        <>Join other players on <span>{serverIp}</span></>
      );
    }
    if (players == null) {
      return <>Checking <span>{serverIp}</span>…</>;
    }
    return <>Players online: <span>{players}</span></>;
  }, [offline, players, serverIp, serverOfflineText, tellUsersWhenServerIsOffline]);

  return (
    <div className="mc" style={{ ["--bg-image"]: `url("${bgImage}")` }}>
      <Particles className="tsparticles" init={particlesInit} options={particleOptions} />

      <div className="container">
        <div className="logo">
          <img src={logoSrc} alt="Server logo" />
        </div>

        <div className="playercount" id="playercount">
          <p>{playerBanner}</p>
        </div>

        <div className="extrapad">
          <p className="ip" onClick={handleCopy} title="Click to copy server IP">
            {copied ? <span className="extrapad">{ipCopiedText}</span> : serverIp}
          </p>
        </div>

        <div className="items">

          <a className="item" href="#vote">
            <img className="img" src={vote} alt="Vote" />
            <p className="title">Vote</p>
            <p className="subtitle">Support the server</p>
          </a>

          <a className="item" href="#store">
            <img className="img" src={store} alt="Store" />
            <p className="title">Store</p>
            <p className="subtitle">Ranks & perks</p>
          </a>

          <a className="item" href="#discord">
            <img className="img" src={forums} alt="Discord" />
            <p className="title">Discord</p>
            <p className="subtitle">Join the community</p>
          </a>
        </div>
      </div>
    </div>
  );
}

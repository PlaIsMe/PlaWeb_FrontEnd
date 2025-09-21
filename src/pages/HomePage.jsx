import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import dailyboss from '../assets/images/dailyboss.png';
import logo from '../assets/images/logo.png';
import minecraft from '../assets/images/minecraft.png';
import annoyingvillagers from '../assets/images/annoyingvillagers.jpg';
import randomgatewayspawning from '../assets/images/randomgatewayspawning.png';
import "../styles/home.css";
import { Link } from "react-router-dom";

export default function HomePage({
  logoSrc = logo,
  bgImage = minecraft,
}) {
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

  const [annoyingVillagersDownloadCount, setAnnoyingVillagersDownloadCount] = useState(null);
  const [dailyBossDownloadCount, setDailyBossDownloadCount] = useState(null);
  const [randomgatewayspawningDownloadCount, setRandomgatewayspawningDownloadCount] = useState(null);

  const API_BASE = "https://api.curseforge.com";
  const API_KEY = import.meta.env.VITE_CURSEFORGE_API_KEY;

  useEffect(() => {
    if (!API_KEY) {
      setLoadErr("Missing VITE_CURSEFORGE_API_KEY in .env");
      return;
    }

    const ids = [
      { id: 1308998, set: setAnnoyingVillagersDownloadCount },
      { id: 1297381, set: setDailyBossDownloadCount },
      { id: 1277910, set: setRandomgatewayspawningDownloadCount },
    ];

    let cancelled = false;

    const fetchCount = async (modId) => {
      const res = await fetch(`${API_BASE}/v1/mods/${modId}`, {
        headers: { Accept: "application/json", "x-api-key": API_KEY },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      const count = json?.data?.downloadCount ?? json?.downloadCount;
      return typeof count === "number" ? count : null;
    };

    (async () => {
      const results = await Promise.allSettled(ids.map(({ id }) => fetchCount(id)));
      if (cancelled) return;

      results.forEach((r, i) => {
        const setter = ids[i].set;
        if (r.status === "fulfilled") setter(r.value);
        else setter(null);
      });
    })().catch(e => !cancelled && setLoadErr(e.message || String(e)));

    return () => { cancelled = true; };
  }, [API_BASE, API_KEY]);

  return (
    <div className="mc" style={{ ["--bg-image"]: `url("${bgImage}")` }}>
      <Particles className="tsparticles" init={particlesInit} options={particleOptions} />

      <div className="container">
        <div className="logo">
          <img src={logoSrc} alt="Server logo" />
        </div>

        <div className="items">
          <a className="item" href="#vote">
            <img className="img" src={randomgatewayspawning} alt="RandomGatewaySpawning" />
            <p className="title">Gateway Spawning</p>
            <p className="subtitle">
              {randomgatewayspawningDownloadCount == null ? "Loading…" :
                `${randomgatewayspawningDownloadCount.toLocaleString()} downloads`}
            </p>
          </a>

          <Link className="item" to="/annoyingvillagers">
            <img className="img" src={annoyingvillagers} alt="AnnoyingVillagers" />
            <p className="title">Annoying Villagers</p>
            <p className="subtitle">
              {annoyingVillagersDownloadCount == null ? "Loading…" :
                `${annoyingVillagersDownloadCount.toLocaleString()} downloads`}
            </p>
          </Link>

          <a className="item" href="#discord">
            <img className="img" src={dailyboss} alt="DailyBoss" />
            <p className="title">Daily Boss</p>
            <p className="subtitle">
              {dailyBossDownloadCount == null ? "Loading…" :
                `${dailyBossDownloadCount.toLocaleString()} downloads`}
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

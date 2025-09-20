import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import forums from '../assets/images/forums.png';
import logo from '../assets/images/logo.png';
import minecraft from '../assets/images/minecraft.jpg';
import store from '../assets/images/store.png';
import vote from '../assets/images/vote.png';
import "../styles/home.css";

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

  return (
    <div className="mc" style={{ ["--bg-image"]: `url("${bgImage}")` }}>
      <Particles className="tsparticles" init={particlesInit} options={particleOptions} />

      <div className="container">
        <div className="logo">
          <img src={logoSrc} alt="Server logo" />
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

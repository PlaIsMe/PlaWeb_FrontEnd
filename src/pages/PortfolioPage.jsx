import React, { useEffect, useState } from 'react';
import Header from "../components/Header.jsx";
import About from "../sections/About.jsx";
import Education from "../sections/Education.jsx";
import Skills from "../sections/Skills.jsx";
import Project from "../sections/Project.jsx";
import Footer from "../components/Footer.jsx";
import useScrollSpy from "../hooks/useScrollSpy.js";
import PorfolioHome from "../sections/PorfolioHome.jsx";
import '../styles/portfolio.css'

function PortfolioPage() {
  const sectionIds = ["home", "about", "education", "skills", "projects"];
  const activeId = useScrollSpy(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [footerAnimate, setFooterAnimate] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsSticky(window.scrollY > 100);
      setFooterAnimate(
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight
      );
      setMenuOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Header
        activeId={activeId}
        menuOpen={menuOpen}
        toggleMenu={() => setMenuOpen((v) => !v)}
        isSticky={isSticky}
      />

      <main>
        <PorfolioHome />
        <About />
        <Education />
        <Skills />
        <Project />
      </main>

      <Footer animate={footerAnimate} />
    </>
  );
}

export default PortfolioPage
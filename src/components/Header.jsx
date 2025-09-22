const Header = ({ activeId, menuOpen, toggleMenu, isSticky }) => {
  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <a href="#home" className="logo">
        Pla
        <span className="animate" style={{ '--i': 1 }}></span>
      </a>

      <div
        className={`bx bx-menu ${menuOpen ? 'bx-x' : ''}`}
        id="menu-icon"
        onClick={toggleMenu}
      >
        <span className="animate" style={{ '--i': 2 }}></span>
      </div>

      <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
        <a className={activeId === 'home' ? 'active' : ''} href="#home">Home</a>
        <a className={activeId === 'about' ? 'active' : ''} href="#about">About</a>
        <a className={activeId === 'education' ? 'active' : ''} href="#education">Education</a>
        <a className={activeId === 'skills' ? 'active' : ''} href="#skills">Skills</a>
        <a className={activeId === 'projects' ? 'active' : ''} href="#projects">Projects</a>

        <span className="active-nav"></span>
        <span className="animate" style={{ '--i': 2 }}></span>
      </nav>
    </header>
  )
}

export default Header
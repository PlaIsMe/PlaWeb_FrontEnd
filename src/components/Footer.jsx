import React from 'react'

export default function Footer({ animate }) {
  return (
    <footer className={`footer ${animate ? 'show-animate' : ''}`}>
      <div className="footer-text">
        <p>Made by Pla</p>
        <span className="animate scroll" style={{ '--i': 1 }}></span>
      </div>

      <div className="footer-iconTop">
        <a href="#home"><i className='bx bx-up-arrow-alt'></i></a>
        <span className="animate scroll" style={{ '--i': 3 }}></span>
      </div>
    </footer>
  )
}

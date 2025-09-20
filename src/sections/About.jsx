import React from 'react'
import avatar from '../assets/images/avatar.jpg';

export default function About() {
  return (
    <section className="about" id="about">
      <h2 className="heading">
        About <span>Me</span>
        <span className="animate scroll" style={{ '--i': 1 }}></span>
      </h2>

      <div className="about-img">
        <img src={avatar} alt="clovic profile" />
        <span className="circle-spin"></span>
        <span className="animate scroll" style={{ '--i': 2 }}></span>
      </div>

      <div className="about-content">
        <h3>
          FullStack Developer
          <span className="animate scroll" style={{ '--i': 3 }}></span>
        </h3>
        <p>
          Hello, I'm Phong Lai! I specialize in Java game modding and have good coding skills in Java, Python, Bash, and C++.
          Beyond game development, I also work across the full stack, from back-end to front-end, and have experience in DevOps
          with Docker and Kubernetes.  
          <span className="animate scroll" style={{ '--i': 4 }}></span>
        </p>

        <div className="btn-box btns">
          <a
            href="https://www.linkedin.com/in/plaisme"
            target="_blank" rel="noreferrer"
            style={{ '--i': 4 }}
            className="btn"
          >Contact Me</a>
          <span className="animate scroll" style={{ '--i': 5 }}></span>
        </div>
      </div>
    </section>
  )
}

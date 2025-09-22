import React from 'react'

function PorfolioHome() {
  return (
    <section className="home show-animate" id="home">
      <div className="home-content">
        <h1>
          Hi, I&apos;m <span>Phong Lai</span>
          <span className="animate" style={{ '--i': 2 }}></span>
        </h1>

        <div className="text-animate">
          <h3>FullStack Developer</h3>
          <span className="animate" style={{ '--i': 3 }}></span>
        </div>

        <p>
          In my free time after work, I focus on Java modding, where I combine creativity with technical skills. I'm proficient in Java, Python, Bash, and C++, and also experienced in backend, frontend, and DevOps development, including microservices architecture. My DevOps work spans containerization and orchestration with tools such as Docker and Kubernetes.
          <span className="animate" style={{ '--i': 4 }}></span>
        </p>

        <div className="btn-box">
          <a
            href="#projects"
            style={{ '--i': 3 }}
            className="btn"
          >
            Project
          </a>
          <a
            href="https://www.linkedin.com/in/plaisme"
            target="_blank" rel="noreferrer"
            style={{ '--i': 4 }}
            className="btn"
          >
            Let&apos;s Talk
          </a>
          <span className="animate" style={{ '--i': 5 }}></span>
        </div>
      </div>

      <div className="home-sci">
        <a href="https://discordapp.com/users/574807648810303502" target="_blank" rel="noreferrer" style={{ '--i': 4 }}>
          <i className='bx bxl-discord-alt'></i>
        </a>
        <a href="https://github.com/PlaIsMe" target="_blank" rel="noreferrer" style={{ '--i': 5 }}>
          <i className='bx bxl-github'></i>
        </a>
        <a href="https://www.youtube.com/@Pla-is-me" target="_blank" rel="noreferrer" style={{ '--i': 6 }}>
          <i className='bx bxl-youtube'></i>
        </a>
        <span className="animate" style={{ '--i': 6 }}></span>
      </div>

      <div className="home-imgHover"></div>
      <span className="animate home-img" style={{ '--i': 7 }}></span>
    </section>
  )
}

export default PorfolioHome
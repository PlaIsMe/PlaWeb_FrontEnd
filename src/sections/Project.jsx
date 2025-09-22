import React from "react";

const PROJECTS = [
  {
    title: "Ho Chi Minh City Open University Alumni Social Network",
    blurb:
      "Full-stack network for alumni, and faculty: posts/comments, real-time chat & notifications, plus university surveys/invitations with email blasts for events. Built with Microservice Spring Boot + React, WebSocket, Firebase Firestore; Dockerized backend on AKS/GCP, frontend on AWS Lightsail.",
    github: "https://github.com/HaiPan10/ou-social-network-final-graduation-project"
  },
  {
    title: "Mobile Chatting Application",
    blurb:
      "Full-stack Mobile Chatting Application using Java Core Socket as realtime service and Java Spring Boot as Database service, the client is Java Android",
    github: "https://github.com/PlaIsMe/ChattingApplication"
  },
  {
    title: "Annoying Villagers",
    blurb:
      "A Minecraft Java Mod inspired by an animation series with 11000+ Downloads",
    github: "https://github.com/PlaIsMe/AnnoyingVillager"
  },
  {
    title: "Daily Boss",
    blurb:
      "A Minecraft Java Mod that add daily boss battle with 3000+ Downloads",
    github: "https://github.com/PlaIsMe/DailyBoss"
  },
  {
    title: "Random Gate Spawning",
    blurb:
      "A Minecraft Java Mod that add random gate spawning event with 4500+ Downloads",
    github: "https://github.com/PlaIsMe/RandomGatewaysSpawning"
  },
];

function Project() {
  return (
    <section className="projects" id="projects">
      <h2 className="heading">
        My <span>Projects</span>
        <span className="animate scroll" style={{ "--i": 1 }} />
      </h2>

      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <article className="project-card" key={p.title}>
            <h3 className="project-title">{p.title}</h3>
            <p className="project-blurb">{p.blurb}</p>

            <div className="project-actions">
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn--icon"
                aria-label={`${p.title} GitHub`}
              >
                <i className="bx bxl-github" aria-hidden="true"></i>
                GitHub Page
              </a>

              {p.wiki && (
                <a
                  href={p.doc}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--ghost btn--icon"
                  aria-label={`${p.title} Document`}
                >
                  <i className="bx bxl-wikipedia" aria-hidden="true"></i>
                  Wiki Page
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Project
import React from 'react'

export default function Education() {
  return (
    <section className="education" id="education">
      <h2 className="heading">
        My <span>Journey</span>
        <span className="animate scroll" style={{ '--i': 1 }}></span>
      </h2>

      <div className="education-row">
        <div className="education-column">
          <h3 className="title">
            Education
            <span className="animate scroll" style={{ '--i': 2 }}></span>
          </h3>

          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <div className="year"><i className='bx bxs-calendar'></i> 2023 - 2024</div>
                <h3>Ho Chi Minh City Open University</h3>
                <p>I have graduated with GPA 3.72</p>
              </div>
            </div>
          </div>
        </div>

        <div className="education-column">
          <h3 className="title">
            Experience
            <span className="animate scroll" style={{ '--i': 5 }}></span>
          </h3>

          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <div className="year"><i className='bx bxs-calendar'></i> March 2023 - June 2023</div>
                <h3>DEK Technoloy - Internship</h3>
                <p>I mainly worked in C++ for a socket-based chatting microservice, handling both backend and frontend development. Throughout the project, I became comfortable working in a Linux environment, gained hands-on experience with Docker and Kubernetes, understood the CI/CD workflow, and wrote unit tests using Google Test (gTest). I also followed the Agile Scrum process and participated in its full development cycle.</p>
              </div>
            </div>

            <div className="education-content">
              <div className="content">
                <div className="year"><i className='bx bxs-calendar'></i> June 2023 - December 2023</div>
                <h3>Ho Chi Minh City Open University - Freelance</h3>
                <p>Worked on developing an alumni social network platform for my university, a project proposed by the Head of the Information Technology Department. I contributed to both backend and frontend development, using Java Spring Boot for the backend and React.js for the frontend. Integrated WebSocket for real-time messaging and used Firebase Firestore (NoSQL) for chat and notification features. The backend was containerized with Docker and deployed on Azure Kubernetes Service (AKS) and Google Cloud. The frontend was manually deployed on a Linux instance via AWS Lightsail. This project helped me strengthen my skills in full-stack development, real-time systems, cloud deployment, and DevOps practices.</p>
              </div>
            </div>

            <div className="education-content">
              <div className="content">
                <div className="year"><i className='bx bxs-calendar'></i> March 2024 - June 2024</div>
                <h3>NexaPod - Freelance</h3>
                <p>I collaborated with a startup team based in Singapore to develop a mobile app designed for event management. The app enables event organizers to publish and promote their events—such as discussion panels and seminars—while allowing participants to easily browse and sign up to join these events. This solution streamlines event organization and participant registration, improving overall engagement and user experience.</p>
              </div>
            </div>

            <div className="education-content">
              <div className="content">
                <div className="year"><i className='bx bxs-calendar'></i> December 2023 - Now</div>
                <h3>Endava Vietnam - Software Engineer</h3>
                <p>This was my first company, where I worked on the low-level system of an IMS (IP Multimedia Subsystem), focusing on components close to the OS layer. Through this role, I gained hands-on experience with Jenkins, Python, and Docker, and significantly improved my Linux system skills and C++. I also contributed to system testing using Java with an internal testing library. Working in an international environment helped me enhance my English communication skills, especially in technical discussions and teamwork.</p>
              </div>
            </div>

            <span className="animate scroll" style={{ '--i': 6 }}></span>
          </div>
        </div>
      </div>
    </section>
  )
}

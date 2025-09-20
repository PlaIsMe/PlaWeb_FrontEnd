import React from 'react'

import java from "../assets/images/icons/java.png";
import python from "../assets/images/icons/python.png";
import cplusplus from "../assets/images/icons/c++.png";
import mysql from "../assets/images/icons/mysql.png";
import javascript from "../assets/images/icons/javascript.png";
import html from "../assets/images/icons/html.png";
import linux from "../assets/images/icons/linux.png";
import github from "../assets/images/icons/github.png";
import minecraft from "../assets/images/icons/minecraft.png";
import bash from "../assets/images/icons/bash.png";
import docker from "../assets/images/icons/docker.png";
import firebase from "../assets/images/icons/firebase.png";
import flutter from "../assets/images/icons/flutter.png";
import jenkins from "../assets/images/icons/jenkins.png";
import kafka from "../assets/images/icons/kafka.png";
import kubernetes from "../assets/images/icons/kubernetes.png";
import nginx from "../assets/images/icons/nginx.png";
import reactjs from "../assets/images/icons/reactjs.png";
import redis from "../assets/images/icons/redis.png";
import springboot from "../assets/images/icons/springboot.png";

const ICONS = [
  { name: "Java", src: java, shape: "square" },
  { name: "Python", src: python, shape: "square" },
  { name: "C++", src: cplusplus, shape: "square" },
  { name: "MySQL", src: mysql, shape: "square" },
  { name: "Html", src: html, shape: "square" },
  { name: "Javascript", src: javascript, shape: "square" },
  { name: "Linux", src: linux, shape: "square" },
  { name: "Github", src: github, shape: "square" },
  { name: "Minecraft", src: minecraft, shape: "square" },
  { name: "Bash", src: bash, shape: "long" },
  { name: "Docker", src: docker, shape: "long" },
  { name: "Firebase", src: firebase, shape: "long" },
  { name: "Flutter", src: flutter, shape: "long" },
  { name: "Jenkins", src: jenkins, shape: "long" },
  { name: "Kafka", src: kafka, shape: "long" },
  { name: "Kubernetes", src: kubernetes, shape: "long" },
  { name: "Nginx", src: nginx, shape: "long" },
  { name: "Reactjs", src: reactjs, shape: "long" },
  { name: "Redis", src: redis, shape: "long" },
  { name: "Springboot", src: springboot, shape: "long" },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        My <span>Technologies</span>
        <span className="animate scroll" style={{ "--i": 1 }} />
      </h2>

      <div className="skills-row">
        <div className="skills-column">
          <div className="skills-box">
            <div className="logos-grid">
              {ICONS.map(({ name, src, shape }) => (
                <div className={`logo-tile ${shape}`} key={name} title={name}>
                  <img src={src} alt={name} loading="lazy" />
                </div>
              ))}
            </div>

            <span className="animate scroll" style={{ "--i": 3 }} />
          </div>
        </div>
      </div>
    </section>
  );
}
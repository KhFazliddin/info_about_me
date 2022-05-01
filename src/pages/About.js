import React from "react";
import "../assets/style/About.css";
import man from "../assets/img/man.png";

function About() {
  return (
    <div>
      <div className="about_container">
        <img src={man} alt="" />
        <div className="left_about">
          <div className="about">
            <p>WHO I AM</p>
            <h1>About Me</h1>
          </div>
          <p>
            Hi! I’m Fazliddin Khasanov, and I’m a designer & developer who has
            passion for building clean web applications with intuitive
            functionality. I enjoy the process of turning ideas into reality
            using creative solutions. I’m always curious about learning new
            skills, tools, and concepts. In addition to working on various solo
            full stack projects, I have worked with creative teams, which
            involves daily stand-ups and communications, source control, and
            project management.
          </p>

          <button>Hire Me</button>
        </div>
      </div>
    </div>
  );
}

export default About;

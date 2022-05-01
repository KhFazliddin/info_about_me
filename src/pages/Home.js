import React from "react";
import "../assets/style/Home.css";
import avatar from "../assets/img/avatar.png";
import experience from "../assets/img/experience.png";
import project from "../assets/img/project.png";
import client from "../assets/img/client.png";
import right from "../assets/img/right.png";

function Home() {
  return (
    <div>
      <div className="center">
        <h3>
          Hi, I am <p> Fazliddin Khasanov</p>
        </h3>
        <h1>Creative designer & front-end developer</h1>
        <p>
          I design and code beautifully simple things, and I love what I do.
        </p>
        <div className="img">
          <img src={avatar} alt="" />
        </div>
      </div>
      <div className="myself">
        <div className="square">
          <img src={experience} alt="" />
          <div className="experience">
            <h1>5+</h1>
            <p>Years of Experience</p>
          </div>
          <img src={right} alt="" />
        </div>
      
        <div className="square">
          <img src={project} alt="" />
          <div className="experience">
          <h1>100+</h1>
          <p>Completed Projects</p>
        </div>
        <img src={right} alt="" />
        </div>
    
        <div className="square">
          <img src={client} alt="" />
          <div className="experience">
          <h1>50+</h1>
          <p> Happy Clients</p>
        </div>
        <img src={right} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;

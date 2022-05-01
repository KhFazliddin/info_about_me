import React from "react";
import "../assets/style/Skills.css";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import javascript from "../assets/img/javascript.png";
import image from "../assets/img/image.png";
import bootstrap from "../assets/img/bootstrap.png";
import image2 from "../assets/img/image2.png";
import sass from "../assets/img/sass.png";
import typescript from "../assets/img/typescript.png";
import python from "../assets/img/python.png";
import tailwind from "../assets/img/tailwind.png";
import figma from "../assets/img/figma.png";
import github from "../assets/img/github.png";

function Skills() {
  return (
    <div className="skills_container">
      <div className="programming_skills">
        <div className="my_skills">
          <p>MY SKILLS</p>
          <h1>
            What My Programming <br /> Skills Included?
          </h1>
        </div>
        <p>
          I develop simple, intuitive and responsive user interface that helps
          users get things <br /> done with less effort and time with those
          technologies.
        </p>
        <button>Hire Me</button>
      </div>
      <div className="programs">
        <div className="programs1">
          <img src={html} alt="" />
          <img src={css} alt="" />
          <img src={javascript} alt="" />
          <img src={image} alt="" />
          <img src={bootstrap} alt="" />
          <img src={image2} alt="" />
        </div>
        <div className="programs2">
          <img src={sass} alt="" />
          <img src={typescript} alt="" />
          <img src={python} alt="" />
          <img src={tailwind} alt="" />
          <img src={figma} alt="" />
          <img src={github} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Skills;

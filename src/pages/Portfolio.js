import React from "react";
import "../assets/style/Portfolio.css";
import first from "../assets/img/1.png";
import second from "../assets/img/2.png";
import thirth from "../assets/img/3.png";
import fourth from "../assets/img/4.png";
import fivth from "../assets/img/5.png";
import sixth from "../assets/img/6.png";

function Portfolio() {


  return (
    <div className="portfolio_container">
      <div className="portfolio_title">
        <div>
          <p>MY WORKS</p>
        </div>
        <h1>Featured Works</h1>
      </div>
      <div className="different_type">
        <p className="first_child">All</p>
        <p>Mobile App</p>
        <p>Website Design</p>
        <p>Website Development</p>
      </div>
      <div className="my_works">
        <div className="img_row">
          <img src={first} alt="" />
          <img src={second} alt="" />
        </div>
        <div className="img_row">
          <img src={thirth} alt="" />
          <img src={fourth} alt="" />
        </div>
        <div className="img_row">
          <img src={fivth} alt="" />
          <img src={sixth} alt="" />
        </div>
      </div>
  
       
    </div>
  );
}

export default Portfolio;

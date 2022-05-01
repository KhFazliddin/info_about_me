import React from "react";
import "../assets/style/Contact.css";
import { Link } from "react-router-dom";
import telegram from "../assets/img/telegram.png";
import icon_telegram from "../assets/img/icon_telegram.png";

function Contact() {
  return (
    <div>
      <div className="last_container">
        <div className="fazliddin">
          <h1>Fazliddin Khasanov.</h1>
          <p>
            Creative designer & front-end <br /> developer
          </p>
        </div>
        <div className="useful_links">
          <h2>Useful Links</h2>
          <div className="links_last">
            <Link style={{ color: "#7B7B7B", textDecoration: "none" }} to="/">
              Home
            </Link>
            <Link
              style={{ color: "#7B7B7B", textDecoration: "none" }}
              to="/about"
            >
              About
            </Link>
            <Link
              style={{ color: "#7B7B7B", textDecoration: "none" }}
              to="/skills"
            >
              Skills
            </Link>
            <Link
              style={{ color: "#7B7B7B", textDecoration: "none" }}
              to="/portfolio"
            >
              Portfolio
            </Link>
            <Link
              style={{ color: "#7B7B7B", textDecoration: "none" }}
              to="/contact"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="social_media">
          <h2>Social Media</h2>
          <div className="links_last">
            <Link style={{ color: "#7B7B7B", textDecoration: "none" }} to="/">
              Instagram
            </Link>
            <Link style={{ color: "#7B7B7B", textDecoration: "none" }} to="/">
              linkedin
            </Link>
            <Link style={{ color: "#7B7B7B", textDecoration: "none" }} to="/">
              Dribbble
            </Link>
            <Link style={{ color: "#7B7B7B", textDecoration: "none" }} to="/">
              Behance
            </Link>
            <Link style={{ color: "#7B7B7B", textDecoration: "none" }} to="/">
              Github
            </Link>
          </div>
        </div>
        <div className="news_letter">
          <h2>Newsletter</h2>
          <p>
            Enter your email and get notified <br /> about news, of.
          </p>
          <div className="input_address">
            <input type="text" placeholder="Your email address" />
            <div className="input_telegram">
              <img className="telegram" src={telegram} alt="" />
              <img className="icon_telegram" src={icon_telegram} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

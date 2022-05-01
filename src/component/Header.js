import React from "react";
import "../assets/style/Header.css";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

function Header() {
  const hirebtn = (e) => {
    e.preventDefault();
    alert("+998909480252");
  };

  return (
    <>
      <div className="container">
        <img src={logo} alt="" />
        <div className="links">
          <Link
            style={{
              textDecoration: "none",
              margin: "0 12px",
              color: "orange",
            }}
            to="/"
          >
            Home
          </Link>
          <Link
            style={{ textDecoration: "none", margin: "0 12px", color: "white" }}
            to="/about"
          >
            About
          </Link>
          <Link
            style={{ textDecoration: "none", margin: "0 12px", color: "white" }}
            to="/skills"
          >
            Skills
          </Link>
          <Link
            style={{ textDecoration: "none", margin: "0 12px", color: "white" }}
            to="/portfolio"
          >
            Portfolio
          </Link>
          <Link
            style={{ textDecoration: "none", margin: "0 12px", color: "white" }}
            to="/contact"
          >
            Contact
          </Link>
        </div>
        <button onClick={hirebtn} className="hire-btn">
          Hire Me
        </button>
      </div>
    </>
  );
}

export default Header;

import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="icons">
          <i className="fab fa-github"></i>
          <i className="fab fa-linkedin"></i>
          {/* <i className="fab fa-instagram"></i> */}
          {/* <i className="fab fa-facebook"></i> */}
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="#Home">About me</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#proj">Projects</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
        </div>
        <p>Mohammad . Rajab . Alfaraj || +963969822720</p>
      </div>
    </div>
  );
};

export default Footer;

import React, { useState } from "react";

import "./landin.css";
import pic from "../imgs/pro.png";
export default function Landing() {
  const [click, setClick] = useState(true);
  const handle = () => setClick(!click);

  return (
    <div className="portfolio">
      <div className="container">
        <nav id="Home" className="navbar">
          <h1 className="logo">
            Mohammad <span>Rajab</span> Alfaraj
          </h1>

          <ul className={click ? "nav-links" : "nav-links active"}>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#proj">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="menu">
            <i className="fa-solid fa-list" onClick={handle}></i>
          </div>
        </nav>

        <section className="hero">
          <div className="hero-right">
            <div className="profile-img">
              <img src={pic} alt="" />
            </div>
          </div>
          <div className="hero-left">
            <h2>
              Hi, It's <span>Mohammad</span>
            </h2>
            <h3>I'm a frontend developer</h3>
            <p>
              Graduated Informatics Engineer passionate about building modern,
              user-friendly web applications Skilled in frontend technologies
              and problem solving with experience in developing real-world
              projects using React and Next.js
            </p>
            <div className="socials">
              <a href="https://github.com/mo-faraj">
                <i className="fab fa-github"></i>{" "}
              </a>
              <a href="https://www.linkedin.com/in/mohammad-rajab-alfaraj-b5052a325?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bf7yEw%2FMwSwKeFK62MW%2FxLg%3D%3D">
                <i className="fab fa-linkedin"></i>{" "}
              </a>

              {/* <a href=""><i className="fab fa-instagram"></i></a> */}
            </div>
            <div className="buttons">
              <a href="#contact">
                <button className="btn contact">Contact</button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

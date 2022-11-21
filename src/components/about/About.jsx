import React from "react";
import "./about.css";
import ME from "../../assets/me-about-1.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <a href="">
                <FaAward className="about__icon" />
              </a>
              <h5>Experience</h5>
              <small>2+ Years Coding</small>
            </article>
            <article className="about__card">
              <a href="">
                <FiUsers className="about__icon" />
              </a>
              <h5>Education</h5>
              <small>ICSE ISC BTech(4th year)</small>
            </article>
            <article className="about__card">
              <a href="">
                <VscFolderLibrary className="about__icon" />
              </a>
              <h5>Projects</h5>
              <small>4+ Completed</small>
            </article>
          </div>

          <p>
            I am a Btech CSE student aspiring career in software engineering. My
            strength is I am a self-motivated person and a positive thinker. My
            Hobby is watching web series or movies and listening to music. My
            strong points are Python and Javascript.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;

import React from "react";
import "./About.css";
import aboutimg from "./jay.png";

function About() {
  return (
    <div className="about component__space">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutimg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                I have a personal philosophy in life: If somebody else can do
                something that I'm doing, they should do it. And what I want to
                do is find things that would represent a unique contribution to
                the world - the contribution that only I, and my portfolio of
                talents, can make happen. Those are my priorities in life. 
              </p>
              <p className="about__text p__color">
                I’ve been focusing my writing efforts on providing
                encouraging content to job seekers—writing about topics that
                inspire and encourage so you can stay positive in what could
                otherwise be a daunting and overwhelming place. Today I wanted
                to share some of my favorite inspirational quotes. I think many
                of them could apply to your career, job search, and life in
                general.
              </p>
              <div className="about__button d__flex align__item__center">
                <a href=""><button className="about btn pointer">View Resume</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

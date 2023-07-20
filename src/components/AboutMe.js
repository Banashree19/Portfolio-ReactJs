import React from "react";
import builder from "../me.jpg.jpeg";
const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
            <div className="photo-wrap">
            <img className="profile-img" src={builder} alt="builder" />
                </div>
          
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About Me</h1>
          <p>
            Hello! I am Banaashree. I have been developing websites for over 2
            years. I'm Software Engineer working for HCL Technology.Technologies
            I use ReactJS , Bootstrap, JavaScript I create responsive websites
            that are displayed on all devices desktops and smartphones. Of
            course, before I begin developing any webapp, Landing Page, Business
            Website or E-commerce, I need to have a ready-made project layout
            (sketch). And I’m ready to do this for you, before we start
            developing your website, we will discuss all the details of your
            niche with you, I will conduct a survey of your competitors and make
            a list of their advantages and weaknesses. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

import React from "react";
import img from "../images/img.jpeg";
import img1 from "../images/img1.jpeg";
import img2 from "../images/img2.jpeg";
import img3 from "../images/img3.jpeg";
import img4 from "../images/img4.jpeg";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Portfolio = () => {
 
  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Portfolio</h1>
        <div className="image-box-wrapper row row-cols-auto justify-content-center">
          <div className="portfolio-image-box" >
            <img className="portfolio-image" src={img} alt="webpage" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" />
          </div>

          <div className="portfolio-image-box">
            <img className="portfolio-image" src={img1} alt="webpage" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" />
          </div>

          <div className="portfolio-image-box">
            <img className="portfolio-image" src={img2} alt="webpage" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" />
          </div>

          <div className="portfolio-image-box">
            <img className="portfolio-image" src={img3} alt="webpage" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" />
          </div>

          <div className="portfolio-image-box">
            <img className="portfolio-image" src={img4} alt="webpage" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" />
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Portfolio;

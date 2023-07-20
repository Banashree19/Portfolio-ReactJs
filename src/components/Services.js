import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookF, faGoogle} from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">My Services</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="circle"><FontAwesomeIcon className= "icon" icon={faDesktop} size="2x"/></div>
                  <h3>UI Development</h3>
                  <p>I approach each individually and always focus on the results.</p>
                  
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="box">
              <div className="circle"><FontAwesomeIcon className= "icon"  icon={faFileCode} size="2x"/></div>
                  <h3>Web Development</h3>
                  <p>Your Website will be build with a new proven technologies</p>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="box">
              <div className="circle"><FontAwesomeIcon className= "icon"  icon={faFacebookF} size="2x"/></div>
                  <h3>JavaScript</h3>
                  <p>Your potential clients will see your services or product on Facebook.</p>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="box">
              <div className="circle"><FontAwesomeIcon className= "icon"  icon={faGoogle} size="2x"/></div>
                  <h3>ReactJs Technology</h3>
                  <p>Your product or ads will appear on top of google search</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Services;

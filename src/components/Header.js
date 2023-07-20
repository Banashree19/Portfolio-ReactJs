import React from 'react';
import Typed from "react-typed";

const Header = () => {
  return (
    <div id='home' className='header-wrapper'>
      <div className='main-info'>
          <h1>Banaashree Portfolio</h1>
          <Typed className='typed-text'
          strings={["Web Application","UI Development","JavaScript","ReactJS"]}
          typeSpeed={40}
          backSpeed={60} 
          loop />
          <a href="a" className="btn-main-offer" >Contact Me</a>
          </div>  
        </div>
  )
}

export default Header
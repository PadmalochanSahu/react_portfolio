import React from 'react';
import '../assets/about.scss';
import photo from '../assets/images/self.png';
const About = () => {
  return (
        <div className="about" id="about">
          <div className="text">
            <p>
            Hi 👋,<br />
            My Name is <br /><span>Padmalochan Sahu</span><br />
            I build things for web
            </p>
          </div>
          <div className="photo">
            <img src={photo} alt='self' />
          </div>
        </div>
    
  )
} 

export default About
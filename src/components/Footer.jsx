import React from 'react'
import { Link } from 'react-scroll';
import '../assets/footer.scss';
import twitter from '../assets/images/twitter.png';
import github from '../assets/images/github.png';
import linkdin from '../assets/images/linkdin.png';
import Coder from '../assets/images/coder.png';

const Footer = () => {
  return (
   <footer id='footer'>
    <div className="head">
        <div className="logo">
        <img src={Coder} alt='logo' />
        </div>
        <div className="contact">
            <div className="phn right">
                <p>+91 12345 09876</p>
            </div>
            <div className="email right">
                <p>info@example.com</p>
            </div>
            <div className="social-media right">
               <img src={github} alt='github' />
               <img src={twitter} alt='twitter' />
               <img src={linkdin} alt='linkdin' />
            </div>
        </div>
    </div>
    <hr />
    <div className="foot">
    <div className="links">
        <ul>
        <li>
            <Link to="/" spy={true} smooth={true} offset={-100} duration={500} className="Link">Home</Link>
          </li>
          <li>
            <Link to="about" spy={true} smooth={true} offset={-100} duration={500} className="Link">About</Link>
          </li>
          <li>
            <Link to="techStack" spy={true} smooth={true} offset={-20} duration={500} className="Link">Tech-Stack</Link>
          </li>
          <li>
            <Link to="projects" spy={true} smooth={true} offset={-180} duration={500} className="Link">Projects</Link>
          </li>
          <li>
            <Link to="footer" spy={true} smooth={true} offset={-100} duration={500} className="Link">Contacts</Link>
          </li>
        </ul>
      </div>
      <div className="detail">
        <p>Designed and built by <span>Pavan MG</span> with <span>Love</span> & <span>Coffee</span></p>
      </div>
    </div>
   </footer>
  )
}

export default Footer
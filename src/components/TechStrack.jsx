import React from 'react';
import '../assets/techstack.scss';
import html from '../assets/images/html.png';
import bootstrap from '../assets/images/bootstrap.png';
import css from '../assets/images/css.png';
import github2 from '../assets/images/github2.png';
import js from '../assets/images/js.png';
import vscode from '../assets/images/vscode.png';
import react from '../assets/images/react.png';
import sass from '../assets/images/sass.png';
import Vector4 from '../assets/images/Vector4.png';
import Vector1 from '../assets/images/Vector1.png';
import Vector2 from '../assets/images/Vector2.png';
import Vector5 from '../assets/images/Vector5.png';

const TechStrack = () => {
  return (
    <div className='techStack' id='techStack'>
        <div className="heading">
            <h1>My Tech Stack</h1>
            <p>Technologies I've been working with recently</p>
        </div>
        <div className="vectors">
            <div className="part-one">
                <img src={html} alt='vector' />
                <img src={bootstrap} alt='vector' />
                <img src={css} alt='vector' />
                <img src={sass} alt='vector' />
                <img src={github2} alt='vector' />
                <img src={js} alt='vector' />
            </div>
            <div className="part-two">
                <img src={vscode} alt='vector' />
                <img src={react} alt='vector' />
                <img src={Vector1} alt='vector' />
                <img src={Vector2} alt='vector' />
                <img src={Vector4} alt='vector' />
                <img src={Vector5} alt='vector' />
            </div>
        </div>
    </div>
  )
}

export default TechStrack

import React from 'react'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import TechStack from './TechStrack'
import Projects from './Projects'
import ProjectContent from './ProjectContent'
import "../assets/main.scss"

const Main = () => {
  return (
    <div className='main'>
        <Header />
        <About />
        <TechStack />
        <div className="heading">
            <h1>Projects</h1>
            <p>Things I've built so far</p>   
        </div>
        <div className='projects'>
        {ProjectContent.map((ProjectContent) => {
          return(
           <Projects 
              key = {ProjectContent.key}
              image = {ProjectContent.image}
              desc = {ProjectContent.disc}
              tech = {ProjectContent.tech}
              preview = {ProjectContent.preview}
              code = {ProjectContent.code}
              name = {ProjectContent.name}
            />
          );
        })}
        </div>
        <Footer />
    </div>
  )
}

export default Main
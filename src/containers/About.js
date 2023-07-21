import React from 'react'
import './About.css'
import Socials from '../components/Socials.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

function About() {
  return (
    <div className='about-container'>
        <div className='left-column'>
            <img alt='me' src={require("../images/about-image.jpg")}></img>
        </div>
        <div className='right-column'>
            <h1>ABOUT ME</h1>
            <br></br>
            <span>
                I graduated from NUS School of Computing with a double degree in
                Business Analytics and Economics. With a passion for data and
                technology, I aspire to build expertise in these areas and develop 
                innovative solutions that inspire change.
            </span>
            <br></br>
            <br></br>
            <div className='socialMedia'>
                <span>Connect with me! </span>
                <br></br>
                <Socials />
            </div>
            <br></br>
            <FontAwesomeIcon icon={faLocationDot} color='red' />&ensp;<span className='location'>Singapore</span>
        </div>
    </div>
  )
}

export default About
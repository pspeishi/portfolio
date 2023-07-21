import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function Socials() {
  return (
    <div className='socials-container'>
        <a href='https://www.linkedin.com/in/lampeishi/'><FontAwesomeIcon icon={faLinkedin} size="2x" color='#0072b1' /></a>&ensp;
        <a href='https://github.com/pspeishi'><FontAwesomeIcon icon={faGithub} size="2x" color='black' /></a>&ensp;
        <a href='mailto: lampeishi00@gmail.com'><FontAwesomeIcon icon={faSquareEnvelope} size="2x" color='red' /></a>&ensp;
    </div>
  )
}

export default Socials
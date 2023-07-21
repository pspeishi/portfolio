import React from 'react'
import './Contact.css'
import Socials from '../components/Socials.js'
import ContactForm from '../components/ContactForm.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <div className='contact-container'>
        <div className='left-container'>
            <h1>Connect with me!</h1>
            <br></br>
            <span>
                Feel free to reach out to me to discuss any opportunities, projects, or just to say hi! 😊
            </span>
            <br></br>
            <br></br>
            <br></br>
            <FontAwesomeIcon icon={faLocationDot} color='darkslategrey' />&ensp;&ensp;&ensp;<span>Singapore</span>
            <br></br>
            <br></br>
            <FontAwesomeIcon icon={faGithub} color='darkslategrey' />&ensp;&ensp;&ensp;<span>pspeishi</span>
            <br></br>
            <br></br>
            <FontAwesomeIcon icon={faEnvelope} color='darkslategrey' />&ensp;&ensp;&ensp;<span>lampeishi00@gmail.com</span>
            <br></br>
            <br></br>
            <br></br>
            <Socials />
            
        </div>
        <div className='right-container'>
            <ContactForm />
        </div>
    </div>
  )
}

export default Contact
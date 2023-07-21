import React from 'react'
import { useEffect, useState } from "react"
import emailjs from 'emailjs-com';
import "./ContactForm.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'

function ContactForm() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('service_2dce9zh', 'template_dn4n2yn', values, 'JvHus5OxXnC6kwk3B')
            .then(response => {
                console.log('Success!', response);
                setValues({name:'', email:'', message:''});
                setStatus('Success');
            }, error => {
                console.log('Failed', error)
            });
    }

    useEffect(() => {
        if(status === 'Success') {
            setTimeout(() => {
                setStatus('');
            }, 3000);
        }
    }, [status]);

    const handleChange = (e) => {
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div>
            {status && renderAlert()}
            <form onSubmit={handleSubmit} className='contact-form-container'>
                <span className='form-title'>
                    <span className='form-title-text'>Drop me a message!</span>
                    <FontAwesomeIcon className='form-title-icon' icon={faMessage} size='2x' color='slategrey' />
                </span>
                <br></br>
                <br></br>
                <label>Name</label>
                <br></br>
                <input type='text' value={values.name} name='name' onChange={handleChange} required></input>
                <br></br>
                <br></br>
                <label>Email</label>
                <br></br>
                <input type='email' value={values.email} name='email' onChange={handleChange}></input>
                <br></br>
                <br></br>
                <label>Message</label>
                <br></br>
                <textarea value={values.message} name='message' onChange={handleChange}></textarea>
                <br></br>
                <br></br>
                <button type='submit'>Send</button>
                <br></br>
                <br></br>
            </form>
        </div>
    )
}

    const renderAlert = () => (
        alert("Your message has been submitted successfully")
    )

export default ContactForm
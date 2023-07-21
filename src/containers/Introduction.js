import React from 'react'
import Typewriter from "typewriter-effect";
import emoji from "react-easy-emoji";
import './Introduction.css'

function Introduction() {
  return (
    <div className='intro-container'>
        <h6>
            Hello there!{" "}
            <span className="wave-emoji">{emoji("👋")}</span>
        </h6>
        <h1>
                I'm
                <strong className='my-name'> Pei Shi</strong>
        </h1>
        <p className='typewriter-text'>
            <Typewriter
                options={{
                    strings: [
                        "I am a data scientist.",
                        "I am a data analyst.",
                        "I am a programmer."
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 10,
                }}
            />
        </p>
    </div>
  )
}

export default Introduction
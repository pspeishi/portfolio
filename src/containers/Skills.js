import React from 'react'
import './Skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRegistered, faDatabase, faLeaf, faTableColumns, faFireFlameCurved, faChartSimple, faGears, faFileExcel } from '@fortawesome/free-solid-svg-icons'
import { faPython, faReact, faJava, faVuejs } from '@fortawesome/free-brands-svg-icons'


function Skills() {
  return (
    <div className='skills-container'>
        <h1>SKILLS</h1>
        <span className='icons-container'>
            <span>
                <FontAwesomeIcon className='skill-icon' icon={faPython} size="4x" color='darkslategrey' />&emsp;&emsp;&emsp;
                <p className='skill-name'>&nbsp;Python</p>
            </span>
            <span>
                <FontAwesomeIcon className='skill-icon' icon={faGears} size="4x" color='darkslategrey' />&emsp;&emsp;&emsp;
                <p className='skill-name'>&ensp;AI/ML</p>
            </span>
            <span>
                <FontAwesomeIcon className='skill-icon' icon={faJava} size="4x" color='darkslategrey' />&emsp;&emsp;&emsp;
                <p className='skill-name'>&ensp;Java</p>
            </span>
            <span>
                <FontAwesomeIcon className='skill-icon' icon={faDatabase} size="4x" color='darkslategrey' />&emsp;&emsp;&emsp;
                <p className='skill-name'>&nbsp;MySQL</p>
            </span>
            <span>
                <FontAwesomeIcon className='skill-icon' icon={faRegistered} size="4x" color='darkslategrey' />&emsp;&emsp;&emsp;
                <p className='skill-name'>&emsp;&ensp;R</p>
            </span>
            <span>
                <FontAwesomeIcon className='skill-icon' icon={faLeaf} size="4x" color='darkslategrey' />&emsp;&emsp;&emsp;
                <p className='skill-name'>MongoDB</p>
            </span>
            <span>
                <FontAwesomeIcon className='skill-icon' icon={faTableColumns} size="4x" color='darkslategrey' />&emsp;&emsp;&emsp;
                <p className='skill-name'>&nbsp;Tableau</p>
            </span>
            <span>
                <FontAwesomeIcon className='skill-icon' icon={faChartSimple} size="4x" color='darkslategrey' />&emsp;&emsp;&emsp;
                <p className='skill-name'>PowerBI</p>
            </span>
            <span>
                <FontAwesomeIcon className='skill-icon' icon={faReact} size="4x" color='darkslategrey' />&emsp;&emsp;&emsp;
                <p className='skill-name'>&nbsp;React.js</p>
            </span>
            <span>
                <FontAwesomeIcon className='skill-icon' icon={faVuejs} size="4x" color='darkslategrey' />&emsp;&emsp;&emsp;
                <p className='skill-name'>&ensp;Vue.js</p>
            </span>
            <span>
                <FontAwesomeIcon className='skill-icon' icon={faFireFlameCurved} size="4x" color='darkslategrey' />&emsp;&emsp;&emsp;
                <p className='skill-name'>Firebase</p>
            </span>
            <span>
                <FontAwesomeIcon className='skill-icon' icon={faFileExcel} size="4x" color='darkslategrey' />&emsp;&emsp;&emsp;
                <p className='skill-name'>&nbsp;Excel</p>
            </span>           
        </span>
    </div>
  )
}

export default Skills
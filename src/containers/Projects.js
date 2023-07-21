import React from 'react';
import {projects} from "../portfolio";
import './Projects.css'

export default function Projects() {
    function openUrlInNewTab(url) {
        if (!url) {
            return;
        }
        var win = window.open(url, "_blank");
        win.focus();
    }

    return (
        <div className='projects-page'>
            <h1 className='projects-page-title'>My Projects</h1>
            <div className='projects-container'>
                {projects.map((project, i) => {
                    return (
                        <div key={i} className='project-card' onClick={() => openUrlInNewTab(project.githubURL)}>
                            <h5 className='project-name'>{project.projectName}</h5>
                            <br></br>
                            <p className='project-desc'>{project.projectDesc}</p>
                            <br></br>
                            <p className='project-tools'>Tools: {project.tools}</p>
                            <p className='project-skills'>Skills: {project.skills}</p>
                            <br></br>
                            <span className='project-url'>View Project</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
import React from 'react'
import { VerticalTimeline } from 'react-vertical-timeline-component';
import {experiences} from "../portfolio";
import TimelineElement from '../components/TimelineElement.js'
import './Timeline.css'

function Timeline() {
  return (
    <div className='timeline-container'>
        <h1 className='timeline-page-title'>My Work Experience</h1>
        <VerticalTimeline className='timeline' 
            lineColor='white'
            layout='1-column-left'>
            {experiences.map(data => <TimelineElement data={data} />)}
        </VerticalTimeline>
        <br></br>
    </div>
  )
}

export default Timeline
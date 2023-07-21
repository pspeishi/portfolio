import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./TimelineElement.css";

export default function TimelineElement({ data }) {
    const logoPath = require("../images/" + data.logo + ".png");
    return <VerticalTimelineElement
        className="timeline-element"
        date={`${data.start} - ${data.end ? data.end : "Present"}`}
        icon={<img src={logoPath} alt='company logo' width="40px" height="40px" border-radius="50%" />}
    >
        <h3 className="position">{data.position}</h3>
        <h4 className="company">{data.company}</h4>
        <span className='type'>{data.type}</span>
        <p className='description'>{data.description}</p>
        <br></br>
    </VerticalTimelineElement>
}
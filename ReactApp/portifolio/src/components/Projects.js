import React from 'react'
import { Button } from 'reactstrap';
import projectSolarSystem from '../images/projectSolarSystem.webm'
import '../style/Projects.css'


export default function Projects() {
  return (
    <div className='containerProjects'>
      <h2>
      Projects
      </h2>
      <div className='content'>
        <video id="videoBanner" className="content" loop autoPlay muted >
          <source src={projectSolarSystem}></source>
        </video>
      </div>
      <div>
        <Button outline color="secondary"> {'<'} </Button>
        <Button outline color="secondary"> {'>'} </Button>
      </div>
    </div>
  )
}

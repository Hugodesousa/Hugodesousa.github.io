import React, { useContext } from 'react'
import { Button } from 'reactstrap';
import projectSolarSystem from '../images/projectSolarSystem.webm'
import myContext from '../context/myContext';
import '../style/Projects.css'



export default function Projects() {
  const {
    componentUsed,
  } = useContext(myContext)
  return (
    <div className='containerProjects'>
      <h3>
        Projects
      </h3>
      <div className='content'>
        <video id="videoBanner" className="content" loop autoPlay muted >
          <source src={projectSolarSystem}></source>
        </video>
      </div>
      <div>
        <Button outline color="secondary"> {'<'} </Button>
        <Button outline color="secondary"> {'>'} </Button>
      </div>
      <div>
        <strong>
          <a href='https://hugodesousa.github.io/Project-Solar-System/' target='_blank' rel="noreferrer">Projeto Solar System</a>
        </strong>
        <p>Lorem ipsum eget nostra arcu pretium senectus vel donec sed consequat luctus, arcu velit ut ante ultricies gravida adipiscing dictum donec fames erat quisque, aptent nulla ultricies cubilia pellentesque non sollicitudin malesuada tincidunt venenatis. iaculis</p>
      </div>
    </div>
  )
}

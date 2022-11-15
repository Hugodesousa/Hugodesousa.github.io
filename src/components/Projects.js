import React, { useContext } from 'react'
import { Button } from 'reactstrap';
// import projectSolarSystem from '../images/projectSolarSystem.webm'
import myContext from '../context/myContext';
import '../style/Projects.css'
import myProjects from '../data';
import Video from './Video';

export default function Projects() {
  const {
    selectedProject,
    setSelectedProject,
  } = useContext(myContext)

  const controlerProjectSelected = (parn) => {
    if (parn === 'mais') {
      return selectedProject < myProjects.length - 1 
        ? setSelectedProject(selectedProject + 1) 
        : setSelectedProject(0) ;
    }
    return selectedProject > 0 
      ? setSelectedProject(selectedProject - 1) 
      : setSelectedProject(myProjects.length - 1) ;
  };

  return (
    <div className='containerProjects'>
      <h3>
        Projects
      </h3>
      <div className='content'>
        <Video image={myProjects[selectedProject].image}/>
      </div>
      <div>
        <Button
        className='buttonNext' 
        outline color="secondary"
          onClick={() => {
            controlerProjectSelected('menos')
          }}
        > {'<'} </Button>
        <Button 
        className='buttonNext' 
        outline color="secondary"
        onClick={() => {
          controlerProjectSelected('mais')
        }}
        > {'>'} 
        </Button>
      </div>
      <div className="discriptionContainer">
        <strong>
          <a href={myProjects[selectedProject].link} target='_blank' rel="noreferrer">{myProjects[selectedProject].title}</a>
        </strong>
        <p>{myProjects[selectedProject].description}</p>
      </div>
    </div>
  )
}

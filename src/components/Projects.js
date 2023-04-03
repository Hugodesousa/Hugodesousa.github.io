import React, { useContext, useState } from 'react'
import { Button } from 'reactstrap';
import myContext from '../context/myContext';
import '../style/Projects.css'
import myProjectsFront from '../dataFront';
import myProjectsBack from '../dataBack';
import Video from './Video';
import { Nav, NavItem, NavLink } from 'reactstrap'

export default function Projects() {
  const {
    selectedProject,
    setSelectedProject,
  } = useContext(myContext)

  const [corrent, setCurrent] = useState(myProjectsBack);

  const controlerProjectSelected = (parn) => {
    if (parn === 'mais') {
      return selectedProject < corrent.length - 1
        ? setSelectedProject(selectedProject + 1)
        : setSelectedProject(0);
    }
    return selectedProject > 0
      ? setSelectedProject(selectedProject - 1)
      : setSelectedProject(corrent.length - 1);
  };

  const switchProjects = async (groupProjects) => {
    setCurrent(groupProjects)
    await setSelectedProject(0)
  };

  return (
    <div className='containerProjects'>
      <div className='containerSelectedProjects'>
        <h2 
          onClick={async () => await switchProjects(myProjectsBack)}
          className='projectsGroup'
        >
          Back-end
        </h2>
        <h2>|</h2>
        <h2 
          onClick={async () => await switchProjects(myProjectsFront)}
          className='projectsGroup'
        >
          Front-end
        </h2>
      </div>
      <div className='content'>
        <Video image={corrent[selectedProject].image} />
      </div>
      <div className='nextContainer'>
        <Button
          className='buttonNext'
          outline color="secondary"
          onClick={() => {
            controlerProjectSelected('menos')
          }}
        > 
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
          </svg> 
        </Button>
        <p>{`${selectedProject + 1} de ${corrent.length}`}</p>
        <Button
          className='buttonNext'
          outline color="secondary"
          onClick={() => {
            controlerProjectSelected('mais')
          }}
        > 
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
          </svg>
        </Button>
      </div>
      <div className="discriptionContainer">
        <h4>
          <a href={corrent[selectedProject].link} target='_blank' rel="noreferrer">{corrent[selectedProject].title}</a>
        </h4>
        <p>{corrent[selectedProject].description}</p>
        <Nav>
          <NavItem>
            <NavLink className='repoLink'
              href={corrent[selectedProject].repoLink}
              target='_blank'>
              <h5>Link do repositório</h5>
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </div>
  )
}

// import React, { useContext,useEffect, useState } from 'react'
// import { Button } from 'reactstrap';
// // import projectSolarSystem from '../images/projectSolarSystem.webm'
// import myContext from '../context/myContext';
// import '../style/Projects.css'
// import myProjectsFrontFront from './ProjectsFront'
// import myProjectsFrontBack from './ProjectsBack'
// // import myProjectsFront from '../data';
// import Video from './Video';

// export default function Projects() {
//   const {
//     selectedProject,
//     setSelectedProject,
//   } = useContext(myContext)

//   const {
//     selectedGroupProducts,
//     setSelectedGroupProducts,
//   } = useContext(myContext);
//   const [corrent, setCurrent] = useState([]);

//   let hendleProjects = myProjectsFrontFront;
//   useEffect(() => {
//     if (selectedGroupProducts === 'back') {
//       setCurrent(myProjectsFrontBack)
//     }
//     if (selectedGroupProducts === 'front') {
//       setCurrent(myProjectsFrontFront)
//     }
//   }, []) 
//   const controlerProjectSelected = (parn) => {
//     if (parn === 'mais') {
//       return selectedProject < corrent.length - 1 
//         ? setSelectedProject(selectedProject + 1) 
//         : setSelectedProject(0) ;
//     }
//     return selectedProject > 0 
//       ? setSelectedProject(selectedProject - 1) 
//       : setSelectedProject(corrent.length - 1) ;
//   };

//   return (
//     <div className='containerProjects'>
//       <div>
//         <h2 onClick={() => setSelectedGroupProducts('back')}>
//           Back-end
//         </h2>
//         <h2 onClick={() => setSelectedGroupProducts('front')}> 
//           Front-end
//         </h2>
//       </div>
//       {/* {selectedGroupProducts === 'back' 
//       ? <ProjectsFront />
//       : <ProjectsFront />} */}

//       <div className='content'>
//         <Video image={myProjectsFrontFront[selectedProject].image}/>
//       </div>
//       <div className='nextContainer'>
//         <Button
//         className='buttonNext' 
//         outline color="secondary"
//           onClick={() => {
//             controlerProjectSelected('menos')
//           }}
//         > {'<'} </Button>

//           <p>{`${selectedProject + 1} de ${hendleProjects.length}`}</p>

//         <Button 
//         className='buttonNext' 
//         outline color="secondary"
//         onClick={() => {
//           controlerProjectSelected('mais')
//         }}
//         > {'>'} 
//         </Button>
//       </div>
//       <div className="discriptionContainer">
//         <strong>
//           <a href={corrent[selectedProject].link} target='_blank' rel="noreferrer">{corrent[selectedProject].title}</a>
//         </strong>
//         <p>{corrent[selectedProject].description}</p>
//       </div>
//     </div>
//   )
// }

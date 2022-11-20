import React, { useContext, useState } from 'react'
import { Button } from 'reactstrap';
import myContext from '../context/myContext';
import '../style/Projects.css'
import myProjectsFront from '../dataFront';
import myProjectsBack from '../dataBack';
import Video from './Video';
import { NavLink } from 'reactstrap'

export default function Projects() {
  const {
    selectedProject,
    setSelectedProject,
  } = useContext(myContext)

  const [corrent, setCurrent] = useState(myProjectsFront);

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

  return (
    <div className='containerProjects'>
      <div className='containerSelectedProjects'>
        <h2 onClick={async() => {
          setCurrent(myProjectsBack)
          await setSelectedProject(0)
          }}>Back-end</h2>
          <h2>|</h2>
        <h2 onClick={async() => {
          setCurrent(myProjectsFront)
          await setSelectedProject(0)
          }}>Front-end</h2>
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
        > {'<'} </Button>
        <p>{`${selectedProject + 1} de ${corrent.length}`}</p>
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
        <h4>
          <a href={corrent[selectedProject].link} target='_blank' rel="noreferrer">{corrent[selectedProject].title}</a>
        </h4>
        <p>{corrent[selectedProject].description}</p>
        <NavLink className='repoLink'
          href={corrent[selectedProject].repoLink}
          target='_blank'>
          <h5>Link do repositório</h5>
        </NavLink>
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

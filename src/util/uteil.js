import React, { useContext } from 'react'
import myContext from '../context/myContext';
import myProjects from '../data';

// const {
//   selectedProject,
//   setSelectedProject,
// } = useContext(myContext)

const controlerProjectSelected = (parn, setSelectedProject, selectedProject) => {
  if (parn === 'mais') {
    return selectedProject < myProjects.length - 1
      ? setSelectedProject(selectedProject + 1)
      : setSelectedProject(0);
  }
  return selectedProject > 0
    ? setSelectedProject(selectedProject - 1)
    : setSelectedProject(myProjects.length - 1);
};

export default controlerProjectSelected
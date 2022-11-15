import React, { useState } from 'react';
import myContext from './myContext';

function MyProvider({children}) {
const [componentUsed, setComponentUsed] = useState('sobre');
    const [selectedProject, setSelectedProject] = useState(0)

const initial = {
    componentUsed,
    setComponentUsed,
    selectedProject,
    setSelectedProject,

}

return (
    <myContext.Provider value={ initial }>
        { children }
    </myContext.Provider>
)
};

export default MyProvider;
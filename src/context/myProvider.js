import React, { useState } from 'react';
import myContext from './myContext';

function MyProvider({children}) {
const [componentUsed, setComponentUsed] = useState('sobre');
const [selectedProject, setSelectedProject] = useState(0);
const [selectedGroupProducts, setSelectedGroupProducts] = useState('back');
    const [modeColor, setModeColor] = useState('white');

const initial = {
    componentUsed,
    setComponentUsed,
    selectedProject,
    setSelectedProject,
    selectedGroupProducts,
    setSelectedGroupProducts,
    modeColor,
    setModeColor,
}

return (
    <myContext.Provider value={ initial }>
        { children }
    </myContext.Provider>
)
};

export default MyProvider;
import React, { useState } from 'react';
import myContext from './myContext';

function MyProvider({children}) {
const [componentUsed, setComponentUsed] = useState('sobre');
const [selectedProject, setSelectedProject] = useState(0);
    const [selectedGroupProducts, setSelectedGroupProducts] = useState('back');

const initial = {
    componentUsed,
    setComponentUsed,
    selectedProject,
    setSelectedProject,
    selectedGroupProducts,
    setSelectedGroupProducts,
}

return (
    <myContext.Provider value={ initial }>
        { children }
    </myContext.Provider>
)
};

export default MyProvider;
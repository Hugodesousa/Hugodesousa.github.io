import React, { useState } from 'react';
import myContext from './myContext';

function MyProvider({children}) {
const [componentUsed, setComponentUsed] = useState('sobre');

const initial = {
    componentUsed,
    setComponentUsed,
}

return (
    <myContext.Provider value={ initial }>
        { children }
    </myContext.Provider>
)
};

export default MyProvider;
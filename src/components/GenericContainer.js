import React, { useContext } from 'react'
import myContext from '../context/myContext';
import About from './About'
import Tec from './Tec'
import Projects from './Projects'
import '../style/GenericContainer.css'

export default function GenericContainer() {
  const {
    componentUsed,
  } = useContext(myContext);

  return (
    <div className='gContainer'>
      {componentUsed === 'sobre' &&
      <About/>
      }
      {componentUsed === 'Tecnologias' &&
        <Tec />
      }
      {componentUsed === 'Projetos' &&
        <Projects />
      }

    </div>
  )
}

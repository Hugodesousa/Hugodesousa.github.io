import React, { useContext } from 'react';
import myContext from '../context/myContext';
import { Nav, NavItem } from 'reactstrap'
import '../style/Header.css'

export default function Header() {
  const {
    setComponentUsed,
} = useContext(myContext)

  const setPage = (parm) => {
    setComponentUsed(parm)
  };

  return (
    <header 
    
    >
      <Nav
      className='header'
      >
        <div className='headerContainer1'>
          <h2>Desenvolvedor Web</h2>
          <h5>Front-end | back-end</h5>
        </div>
        <div className='headerContainer2'>
        <NavItem>
            <h4
            className='headerItem'
              onClick={() => setPage('Sobre')}
            >
              Sobre
            </h4>
        </NavItem>
        <NavItem>
            <h4
              className='headerItem'
              onClick={() => setPage('Tecnologias')}
            >
              Tecnologias
            </h4>
        </NavItem>
        <NavItem>
          <h4
            className='headerItem'
            onClick={() => setPage('Projetos')}
          >
            Projetos
          </h4>
        </NavItem>
        </div>
      </Nav>
    </header>
  )
}

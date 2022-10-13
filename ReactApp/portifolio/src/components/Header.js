import React, { useContext } from 'react';
import myContext from '../context/myContext';

export default function Header() {
  const {
    componentUsed,
    setComponentUsed,
} = useContext(myContext)

  const setPage = (parm) => {
    setComponentUsed(parm)
  };

  return (
    <header>
      <div>
        <h1>Desenvolvedor Web</h1>
        <h3>Front-end | back-end</h3>
      </div>
      <div>
        <h2
        onClick={() => setPage('Sobre')}
        >Sobre</h2>
        <h2
        onClick={() => setPage('Tecnologias')}
        >Tecnologias</h2>
        <h2
        onClick={() => setPage('Projetos')}
        >Projetos</h2>
        {console.log('html', componentUsed)}
      </div>
    </header>
  )
}

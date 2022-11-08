import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import copy from 'copy-to-clipboard'

export default function Contacts() {
  return (
    <Nav className='header'>
      <NavItem className='headerItem'>
        <NavLink href='https://github.com/Hugodesousa' target='_blank'>
          <h4>GitHub</h4>
        </NavLink>
      </NavItem>
      <NavItem className='headerItem'>
        <NavLink
          href='https://www.linkedin.com/in/hugo-de-sousa-dev'
          target='_blank'>
          <h4>Linkdin</h4>
        </NavLink>
      </NavItem>
      <NavItem className='headerItem'>
        <NavLink 
        onClick={ () => {
          copy('hugodesousa.16@gmail.com')
            alert('Email copiado para área de transferência')
        } }
        >           
            <h4>Gmail</h4>
        </NavLink>
      </NavItem>
    </Nav>
  )
}
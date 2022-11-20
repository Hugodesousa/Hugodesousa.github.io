import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import copy from 'copy-to-clipboard'

export default function Contacts() {
  return (
    <Nav className='header'>
      <NavItem className='headerItem'>
        <NavLink href='https://github.com/Hugodesousa' target='_blank'>
          <h5>GitHub</h5>
        </NavLink>
      </NavItem>
      <NavItem className='headerItem'>
        <NavLink
          href='https://www.linkedin.com/in/hugo-de-sousa-dev'
          target='_blank'>
          <h5>Linkdin</h5>
        </NavLink>
      </NavItem>
      <NavItem className='headerItem'>
        <NavLink
          onClick={() => {
            copy('hugodesousa.16@gmail.com')
            alert('Email copiado para área de transferência')
          }}
        >
          <h5>Gmail</h5>
        </NavLink>
      </NavItem>
    </Nav>
  )
}
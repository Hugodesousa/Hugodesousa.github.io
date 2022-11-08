import React from 'react'
import { Nav, NavItem } from 'reactstrap'

export default function Contacts() {
  return (
    <Nav className='header'>
      <NavItem className='headerItem'>
        <h4>GitHub</h4>
      </NavItem>
      <NavItem className='headerItem'>
        <h4>Linkdin</h4>
      </NavItem>
      <NavItem className='headerItem'>
        <h4>Gmail</h4>
      </NavItem>
    </Nav>
  )
}

import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import copy from 'copy-to-clipboard'
import '../style/Contacts.css'

export default function Contacts() {
  return (
    <>
      <Nav className='footer'>
        <NavItem className='footerItem'>
          <NavLink href='https://github.com/Hugodesousa' target='_blank'>
            <h5>GitHub</h5>
          </NavLink>
        </NavItem>
        <NavItem className='footerItem'>
          <NavLink
            href='https://www.linkedin.com/in/hugo-de-sousa-dev'
            target='_blank'>
            <h5>Linkdin</h5>
          </NavLink>
        </NavItem>
        <NavItem className='footerItem'>
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
    </>
  )
}
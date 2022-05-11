import React from 'react'
import {Nav, NavContainer, NavLogo} from './NavbarElements';

const NavBar = () => {
  return (
      <>
      <Nav>
          <NavContainer>
              <NavLogo to="/"></NavLogo>
          </NavContainer>
      </Nav>
      </>
  )
}

export default NavBar;
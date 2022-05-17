import React from 'react';
import { FaBars } from 'react-icons/fa';
import {NavBtnLink,NavBtn,MobileIcon, Nav, NavContainer, NavItem, NavLogo, NavMenu,NavLinks} from './NavbarElements';

const NavBar = () => {
  return (
      <>
      <Nav>
          <NavContainer>
              <NavLogo to = "/">OBG</NavLogo>
              <MobileIcon>
                  <FaBars />
              </MobileIcon>
              <NavMenu>
                  <NavItem>
                      <NavLinks to='about'>
                          BookKeeping
                      </NavLinks>
                  </NavItem>
                  <NavItem>
                  <NavLinks to='payroll'>
                          Payroll
                      </NavLinks>
                  </NavItem>
                  <NavItem>
                      
                  <NavLinks to='services'>
                          Services
                      </NavLinks>
                  </NavItem>
                  <NavItem>
                      
                  <NavLinks to='contact'>
                          Contact
                      </NavLinks>
                  </NavItem>
                  <NavBtn>
                      <NavBtnLink to ='/signin'>Sign In</NavBtnLink>
                  </NavBtn>
              </NavMenu>
          </NavContainer>
      </Nav>
      </>
  )
}

export default NavBar;
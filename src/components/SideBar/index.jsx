import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements'
import localizedStrings from '../localizedString'
import Language from '../Navbar/Language'

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='discover' onClick={toggle}>{localizedStrings.Navbar.bestoffer}</SidebarLink>
          <SidebarLink to='about' onClick={toggle}>{localizedStrings.Navbar.aboutus}</SidebarLink>
          <SidebarLink to='services' onClick={toggle}>{localizedStrings.Navbar.offers}</SidebarLink>
          <SidebarLink to='signup' onClick={toggle}>{localizedStrings.Navbar.therapy}</SidebarLink>
          <SidebarLink to='contact' onClick={toggle}>{localizedStrings.Navbar.contact}</SidebarLink>
          <SidebarLink><Language/></SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar

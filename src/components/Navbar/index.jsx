import React, {useState, useEffect} from 'react'
import { FaSpa } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import { Nav,
         NavbarContainer,
         NavLogo, 
         MobileIcon, 
         NavMenu, 
         NavLinks, 
         NavItem, 
         NavBtn, 
         NavBtnLink } from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll';
import localizedStrings from '../localizedString'
import { IntlProvider, FormattedMessage, FormattedDate } from 'react-intl'

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)
  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }
  

  return (
    <>
    <IconContext.Provider value={{ color: '#B09E61'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaSpa />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='discover'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >{localizedStrings.Navbar.bestoffer}</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='about'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >{localizedStrings.Navbar.aboutus}</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >{localizedStrings.Navbar.offers}</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='signup'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >{localizedStrings.Navbar.therapy}</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='contact'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >{localizedStrings.Navbar.contact}</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn></NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}
//<NavBtnLink to='/'></NavBtnLink>
export default Navbar

/*

  const [language,setLanguage] = useState(localizedStrings);

  const handleChange = (e) => {
    setLanguage(e.target.value);
  };



<select onChange={handleChange} defaultValue={language}>
              {['en', 'cg'].map((x) => (
              <option key={localizedStrings.x}>{x}</option>
              ))}</select>
              <IntlProvider language={language} messages={localizedStrings[language]}>
              </IntlProvider> 
              <IntlProvider language={language} messages={localizedStrings[language]}>
              </IntlProvider>
*/
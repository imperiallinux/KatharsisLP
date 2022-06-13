import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
  import {FooterContainer, 
          FooterWrap, 
          FooterLinkWrapper, 
          FooterLinkItems, 
          FooterLinkContainer,
          FooterLinkTitle, 
          FooterLink, 
          SocialIconLink, 
          SocialIcons,
          SocialLogo, 
          SocialMedia, 
          SocialMediaWrap, 
          WebsiteRights,WebsiteRights2 } from './FooterElements'
import { animateScroll as scroll } from 'react-scroll';
import localizedStrings from '../localizedString'

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>{localizedStrings.Footer.in}</FooterLinkTitle>
                <FooterLink href='https://hgbudvanskarivijera.com/en/hotel-slovenska-plaza-in-budva/overview/'>{localizedStrings.Footer.place}</FooterLink>
                <FooterLink href='https://www.google.com/maps/place/Katharsis+Wellness+%26+Health/@42.2869113,18.8438101,15z/data=!4m5!3m4!1s0x0:0x3f4ac1265ec0d4b0!8m2!3d42.2869113!4d18.8438101?hl=sr'>{localizedStrings.Footer.adress}</FooterLink>
                <FooterLink to='/'>{localizedStrings.Footer.work}</FooterLink>
                <FooterLink to='/'>{localizedStrings.Footer.workw}</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>{localizedStrings.Footer.link}</FooterLinkTitle>
                <FooterLink href='https://instagram.com/katharsismontenegro?igshid=YmMyMTA2M2Y='>Instagram</FooterLink>
                <FooterLink href='https://www.facebook.com/katharsisMNE '>Facebook</FooterLink>
                <FooterLink href='https://youtube.com/channel/UC5bDuzwPKFmv07gr_7vOXHg'>Youtube</FooterLink>
                <FooterLink to='/'></FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              KATHARSIS
            </SocialLogo>
            <WebsiteRights>KATHARSIS © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            
            <SocialIcons>
              <SocialIconLink href='https://www.facebook.com/katharsisMNE ' target='_blank' arial-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='https://instagram.com/katharsismontenegro?igshid=YmMyMTA2M2Y=' target='_blank' arial-label='Instagram'>
                <FaInstagram/>
              </SocialIconLink>
              <SocialIconLink href='https://youtube.com/channel/UC5bDuzwPKFmv07gr_7vOXHg' target='_blank' arial-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap><WebsiteRights2>Vladan Babić & Mitar Mijatović</WebsiteRights2>
    </FooterContainer>
  )
}

export default Footer

import React from 'react'
import { Button } from '../ButtonElements'
import {InfoContainer, 
        InfoWrapper, 
        InfoRow, 
        Column1, 
        Column2, 
        TextWrapper, 
        TopLine, 
        Heading, 
        Subtitle,Subtitle2, Subtitle3, Subtitle4, Subtitle5, Subtitle6, Subtitle7, Subtitle8,  
        BtnWrap, 
        ImgWrap, 
        Img,
        Video1 } from './InfoElements'

const Info = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, 
  description2,description3,description4,description5,description6,description7,description8,
   buttonLabel, alt, img, primary, dark, dark2 ,video}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <Subtitle2 darkText={darkText}>{description2}</Subtitle2>
                <Subtitle3 darkText={darkText}>{description3}</Subtitle3>
                <Subtitle4 darkText={darkText}>{description4}</Subtitle4>
                <Subtitle5 darkText={darkText}>{description5}</Subtitle5>
                <Subtitle6 darkText={darkText}>{description6}</Subtitle6>
                <Subtitle7 darkText={darkText}>{description7}</Subtitle7>
                <Subtitle8 darkText={darkText}>{description8}</Subtitle8>
                <BtnWrap>
                  <Button to='discover'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                  dark2={dark2 ? 1 : 0}
                  >{buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Video1 autoPlay loop muted playsInline src={video} alt={alt}  type='video/mp4'/>
                <Img src={img}/>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default Info

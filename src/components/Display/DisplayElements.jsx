import styled from 'styled-components';
import {Link} from 'react-scroll'

export const DisplayContainer = styled.div`
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;

  @media screen and (max-width: 768px) {
    height: 1300px;
  }
 `

 
 export const DisplayWrapper = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    display: inline-grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
    padding: 0 50px;
    @media screen and (max-width: 555px) {
      grid-template-columns: 1fr;
      padding: 0 10px;
    } 
`

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  background: #153A6E;
  border-radius: 15px;
  text-align: justify;
  text-decoration: center;
  align-self: center;
  
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hiden;
  padding-right: 0;
  border-radius: 15px;
`;
//margin: 0 0 16px 0px;

export const DisH1 = styled.h1`
  font-size: 2.5rem;
  color: #153A6E;
  margin-bottom: 5px;
  padding-top: 0px;

  @media screen and (max-width: 480px) {
    font-size: 1.8rem;
  }  
`
export const DisS = styled.s`
  font-size: 1.2rem;
  color: #153A6E;
  margin-bottom: 10px;
  text-decoration: none;
  text-align: center;
  margin-right: 5%;
  margin-left: 5%;

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }  
`

export const DisplayCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  max-height: 340px;
  padding:  30px;
  box-shadow: 0 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
  }
`

export const BtnWrapper = styled.div`
  flex-direction: column;
`

export const ButtonA = styled(Link)`
  border-radius: 15px;
  white-space: nowrap;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  transition: all 0.2s ease-in-out;
`

export const Txt = styled.s`
  font-size: 1.0rem;
  color: #fff;
  width: 100%;
  height: 100%;
  
  padding-right: 0;
  border-radius: 15px;
  white-space: normal;
  text-decoration: none; 
  padding: 20px 20px;

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }  
`
//margin: 0 0 16px 0px;

export const ImgTxt = styled.h3`
  font-size: 35px;
  color: #153A6E;
  background: #fff;
  opacity: 80%;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: fit-content;
  margin: auto;

  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 820px) {
    font-size: 1.6rem;
  }
`

export const Ref = styled.a`
color: #B09E61;
`
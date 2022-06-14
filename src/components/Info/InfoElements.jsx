import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #153A6E;
  background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#B09E61')};

  @media screen and  (max-width: 768px) {
    padding: 25px 0px;
    height: 1150px;
  }
  @media screen and  (max-width: 820px) {
  }
`
export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 760px;
  width: auto;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

`
export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    display: block;
  }
`
export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;

  @media screen and (max-width: 555px) {
    margin-bottom: 100px;
    padding-top: 35%;
  }
`
export const TextWrapper = styled.div`
  max-width: 560px;
  padding-top: 0;
  padding-bottom: 10px;
  @media screen and (max-width: 480px) {
    padding-bottom: 10px;
  }
`
/*@media screen and (max-width: 480px) {
    font-size: 1px;
  }*/
export const TopLine = styled.p`
  color: #153A6E;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  margin-top: 16px;
`
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 42px;
  line-height: 1.1;
  font-weight: 600px;
  color: ${({lightText}) => (lightText ? '#f7f8fa' : '#153A6E')};
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }  
`
export const Subtitle  = styled.p`
  max-width: 440px;
  margin-bottom: 15px;
  font-size: 16px;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? '#153A6E' : '#fff')};
`
export const Subtitle2  = styled.p`
  max-width: 440px;
  font-weight: bold;
  margin-bottom: 3px;
  font-size: 16px;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? '#153A6E' : '#fff')};
`
export const Subtitle3  = styled.p`
  max-width: 440px;
  margin-bottom: 3px;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? '#153A6E' : '#fff')};
`
export const Subtitle4  = styled.p`
  max-width: 440px;
  font-weight: bold;
  margin-bottom: 3px;
  font-size: 16px;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? '#153A6E' : '#fff')};
`
export const Subtitle5  = styled.p`
  max-width: 440px;
  font-weight: bold;
  margin-bottom: 3px;
  font-size: 16px;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? '#153A6E' : '#fff')};
`
export const Subtitle6  = styled.p`
  max-width: 440px;
  font-weight: bold;
  margin-bottom: 3px;
  font-size: 16px;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? '#153A6E' : '#fff')};
`
export const Subtitle7  = styled.p`
  max-width: 440px;
  margin-bottom: 3px;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? '#153A6E' : '#fff')};
`
export const Subtitle8  = styled.p`
  max-width: 440px;
  font-weight: bold;
  margin-bottom: 35px;
  font-size: 16px;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? '#153A6E' : '#fff')};
`

export const BtnWrap = styled.div`
  display:flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  margin: 0 0 10px 0px;
  padding-right: 10px;
  padding-top: 60px;
  @media screen and (max-width: 960px) {
    padding-top: 0px;
    padding-bottom: 10px;
  }
`;

export const Video1 = styled.video`
  max-width: 555px;
  height: 50%;
  padding-right: 5px;
  @media screen and (max-width: 960px) {
    max-width: 315px;
    padding-right: 0px;
  }
`;

export const VideoWrap = styled.div`
  max-width: 555px;
  height: 100%;
  @media screen and (max-width: 960px) {
    margin-top: -30%;
    max-width: 315px;
    max-height: 200px;
    padding-right: 0px;
  }
`;
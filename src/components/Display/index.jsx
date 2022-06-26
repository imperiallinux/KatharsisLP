import React from 'react'
import Icon1 from '../../images/Nutri.jpg'
import Icon2 from '../../images/medical.jpg'
import Icon3 from '../../images/body.jpg'
import Icon4 from '../../images/well.jpg'
import ReactCardFlip from 'react-card-flip';
import {DisplayContainer,
        DisplayWrapper,
        ImgWrap,
        Img,
        DisH1,
        DisS,Txt,
        BtnWrapper,
        ButtonA, ImgTxt,Ref} from './DisplayElements'
import localizedStrings from '../localizedString'



class Display extends React.Component {
    constructor() {
        super();
        this.state = {
        isFlipped: false 
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
        console.log(e);
    }
    
   

    render() {
        return (
        <DisplayContainer id='services'>
            <DisH1>{localizedStrings.Offer.title}</DisH1>
            <DisS>{localizedStrings.Offer.sub}<br></br>{localizedStrings.Offer.sub1}</DisS>
        <DisplayWrapper>
            <ImgWrap>
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                    <BtnWrapper> 
                        <ButtonA>
                            <Img onClick={this.handleClick} src={Icon1}></Img>
                            <ImgTxt>{localizedStrings.Offer.titleN}</ImgTxt>
                        </ButtonA>
                    </BtnWrapper>
                    <BtnWrapper>
                        <ButtonA onClick={this.handleClick}>
                            <Txt>
                                <br></br> <br></br> <br></br> 
                                {localizedStrings.Offer.bia}
                                <br></br> <br></br> <br></br> 
                            </Txt>
                        </ButtonA>
                    </BtnWrapper>
                </ReactCardFlip>
            </ImgWrap>

            <ImgWrap>
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                    <BtnWrapper>
                        <ButtonA onClick={this.handleClick}>
                            <Img src={Icon2}></Img>
                            <ImgTxt>{localizedStrings.Offer.titleM}</ImgTxt>
                        </ButtonA>
                    </BtnWrapper>
                    <BtnWrapper>
                        <ButtonA onClick={this.handleClick}>
                            <Txt>
                               <span style={{fontWeight: 'bold'}}>- Global lift</span> {localizedStrings.Offer.lift}<br></br> 
                                <span style={{fontWeight: 'bold'}}>- Corrective</span> {localizedStrings.Offer.corrective}<br></br> 
                                <span style={{fontWeight: 'bold'}}>- Timeless prodigy </span> {localizedStrings.Offer.prodigy} 
                                <Ref href = "https://skeyndor.com/en/" >LINK</Ref> 
                             </Txt>
                        </ButtonA>
                    </BtnWrapper>
                </ReactCardFlip>
            </ImgWrap>

            <ImgWrap>
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                    <BtnWrapper>
                        <ButtonA onClick={this.handleClick}>
                            <Img src={Icon3}></Img>
                            <ImgTxt>{localizedStrings.Offer.titleB}</ImgTxt>
                        </ButtonA>
                    </BtnWrapper>
                    <BtnWrapper>
                        <ButtonA onClick={this.handleClick}>
                            <Txt>
                                <span style={{fontWeight: 'bold'}}>LPG-</span>  {localizedStrings.Offer.lpg}
                                <Ref href = "https://www.endermologie.com/en/" > LINK</Ref>   
                                <br></br> 
                                <span style={{fontWeight: 'bold'}}>Endospheres-</span>  {localizedStrings.Offer.endosfera}
                                <Ref href = "https://www.endospheres.com/" > LINK</Ref> 
                                <br></br> 
                                <span style={{fontWeight: 'bold'}}> {localizedStrings.Offer.title1}</span>  {localizedStrings.Offer.body}
                                <br></br>  
                                <span style={{fontWeight: 'bold'}}> {localizedStrings.Offer.title2}</span>  {localizedStrings.Offer.co2}
                                <br></br> 
                                <span style={{fontWeight: 'bold'}}> {localizedStrings.Offer.title3}</span>  {localizedStrings.Offer.cav}
                            </Txt>
                        </ButtonA>
                    </BtnWrapper>
                </ReactCardFlip>
            </ImgWrap>

            <ImgWrap >
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                    <BtnWrapper>
                        <ButtonA onClick={this.handleClick}>
                            <Img src={Icon4}></Img>
                            <ImgTxt>Wellness</ImgTxt>
                        </ButtonA>
                    </BtnWrapper>
                     <BtnWrapper>
                        <ButtonA onClick={this.handleClick}>
                            <Txt>
                                {localizedStrings.Offer.spa}<br></br> 
                                <span style={{fontWeight: 'bold'}}>SPA EXPERIENCE-</span> {localizedStrings.Offer.exp}<br></br> 
                                <span style={{fontWeight: 'bold'}}>MEDITERRANEAN ORIGINS- </span> {localizedStrings.Offer.mediteran}
                            </Txt>
                        </ButtonA>
                    </BtnWrapper>
                </ReactCardFlip>
            </ImgWrap>
        </DisplayWrapper> 

        </DisplayContainer>
            
         )
      }
    }


/*

const Display = () => {
  return (
    <DisplayContainer id='services'>
        
        <DisH1>PRODAJNA PONUDA</DisH1>
        <DisS>Neinvazivni tretmani lica, tretmani oblikovanja  tijela i wellness ponuda  je sve sto
             vam je potrebno za tijelo kojim ste zadovoljni, kao i mladalacki izgled lica.
       </DisS>
      <DisplayWrapper>
          <ImgWrap>
          <Img src={Icon1}></Img>
          <Img src={Icon3}></Img>
          </ImgWrap>
          <ImgWrap>
          <Img src={Icon2}></Img>
          <Img src={Icon4}></Img>
          </ImgWrap>
          
      </DisplayWrapper>
    </DisplayContainer>
  )
}*/

export default Display






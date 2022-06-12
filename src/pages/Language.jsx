import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import localizedStrings from '../components/localizedString'
import { LngBtn,Sel } from '../components/Navbar/NavbarElements'
import ReactDOM from 'react-dom';



class Language extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          language: 'en'
        }
        
        this.handleLanguageChange = this.handleLanguageChange.bind(this);
      }
    
      handleLanguageChange(e) {
        e.preventDefault();
        let lang = e.target.value;
        this.setState(prevState => ({
          language: lang
        }))
      }

    render() {
        localizedStrings.setLanguage(this.state.language);
        return (
            <LngBtn>
                <Sel onChange={this.handleLanguageChange}>
                    <option value='en'>ENG</option>
                    <option value='cg'>MNE</option>
                </Sel>
                <br /><br />
                {localizedStrings.how}
            </LngBtn>
           
         )
      }
    }

    ReactDOM.render(<Language />, document.getElementById('root'));

export default Language
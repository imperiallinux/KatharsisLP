import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import localizedStrings from '../localizedString';
import {LngBtn, Sel} from './NavbarElements';
import ReactDOM from 'react-dom';

class Language extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: localStorage?.language
        ? localStorage.getItem('language')
        : 'en',
    };

    localizedStrings.setLanguage(
      localStorage?.language ? localStorage.getItem('language') : 'en'
    );

    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }

  handleLanguageChange(e) {
    e.preventDefault();
    let lang = e.target.value;
    this.setState((prevState) => ({
      language: lang,
    }));
    window?.localStorage?.setItem('language', lang);
    window.location.reload(true);
  }

  render() {
    return (
      <LngBtn>
        <Sel onChange={this.handleLanguageChange}>
          <option
            value='en'
            selected={this.state.language === 'en' ? true : false}
          >
            ENG
          </option>
          <option
            value='cg'
            selected={this.state.language === 'cg' ? true : false}
          >
            MNE
          </option>
        </Sel>
        {localizedStrings.how}
      </LngBtn>
    );
  }
}

ReactDOM.render(<Language />, document.getElementById('root'));

export default Language;
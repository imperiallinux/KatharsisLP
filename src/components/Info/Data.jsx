import localizedStrings from '../localizedString';

localizedStrings.setLanguage(
  localStorage?.language ? localStorage.getItem('language') : 'en'
);

export const homeObjOne = {
  id: 'about',
  lightBg: true,
  lightText: false,
  lighttextDesc: false,
  topLine: localizedStrings.Data.One.topLine,
  headline: localizedStrings.Data.One.headline,
  description: localizedStrings.Data.One.description,
  buttonLabel: localizedStrings.Data.One.buttonLabel,
  imgStart: false,
  img: '/images/lg.png',
  alt: 'logo',
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lighttextDesc: false,
  topLine: localizedStrings.Data.Two.topLine,
  headline: localizedStrings.Data.Two.headline,
  description: localizedStrings.Data.Two.description,
  description2: localizedStrings.Data.Two.description2,
  description3: localizedStrings.Data.Two.description3,
  description4: localizedStrings.Data.Two.description4,
  description5: localizedStrings.Data.Two.description5,
  description6: localizedStrings.Data.Two.description6,
  buttonLabel: localizedStrings.Data.Two.buttonLabel,
  imgStart: true,
  video: '/images/endo.mp4',
  alt: 'SPA',
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lighttextDesc: false,
  topLine: localizedStrings.Data.Three.topLine,
  headline: localizedStrings.Data.Three.headline,
  description: localizedStrings.Data.Three.description,
  description2: localizedStrings.Data.Three.description2,
  description3: localizedStrings.Data.Three.description3,
  description4: localizedStrings.Data.Three.description4,
  description5: localizedStrings.Data.Three.description5,
  description6: localizedStrings.Data.Three.description6,
  description7: localizedStrings.Data.Three.description7,
  description8: localizedStrings.Data.Three.description8,
  buttonLabel: localizedStrings.Data.Three.buttonLabel,
  imgStart: false,
  img: '/images/reh.jpg',
  alt: 'logo',
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjFour = {
  id: 'contact',
  lightBg: true,
  lightText: false,
  lighttextDesc: false,
  topLine: localizedStrings.Data.Four.topLine,
  headline: localizedStrings.Data.Four.headline,
  description: '  ',
  description2: localizedStrings.Data.Four.description2,
  description3: localizedStrings.Data.Four.description3,
  description4: localizedStrings.Data.Four.description4,
  buttonLabel: 'Katharsis',
  imgStart: true,
  img: '/images/lg.png',
  alt: 'logo',
  dark: false,
  primary: false,
  darkText: true,
};
import { CLICK_UPDATE_VALUE, CLICK_CHANGE_THEME_VALUE, CLICK_CHANGE_LANG_VALUE } from './TESTEactionTypes';
export const clickButton = value => ({
  type: CLICK_UPDATE_VALUE,
  newValue: value
});

export const clickTESTE = param1 => (    
  {
    type: CLICK_UPDATE_VALUE,
    newValue: param1
  }
);

export const clickChangeTheme = param1 => ( 
  localStorage.setItem('tema', param1),  
  {
    type: CLICK_CHANGE_THEME_VALUE,
    newValue1: param1
  }
);

export const clickChangeLang = param1 => (  
  console.log(localStorage.getItem('language')),
  localStorage.setItem('language', param1),  
  {    
    type: CLICK_CHANGE_LANG_VALUE,
    languageResources: param1
  }
);
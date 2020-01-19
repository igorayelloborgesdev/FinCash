import {
  CLICK_UPDATE_VALUE,
  CLICK_CHANGE_THEME_VALUE,
  CLICK_CHANGE_LANG_VALUE
} from "../actions/TESTEactionTypes";
const initialState = {
  newValue1: "tema1_2",
  language: "en",
  languageResources: {}
};
export const TESTEclickReducer = (state = initialState, action) => {
  if (
    localStorage.getItem("tema") != null &&
    (action.type != CLICK_CHANGE_THEME_VALUE ||
      action.type != CLICK_UPDATE_VALUE)
  ) {
    var tema = localStorage.getItem("tema");
    action.newValue1 = tema;
  }
  
  if (
    localStorage.getItem("idioma") != null &&
    action.type != CLICK_CHANGE_LANG_VALUE
  ) {
    setTimeout(() => {
      action.languageResources = initialState.languageResources;
      var idioma = localStorage.getItem("idioma");      
      var idiomaJSON = JSON.parse(idioma);
      var key = initialState.language;
      var idiomaFinal = idiomaJSON[key].translation;
      return {
        ...state,
        newValue1: action.newValue1,
        languageResources: idiomaFinal
      };
    }, 3000);
  }
  
  if (localStorage.getItem("language") && action.type != CLICK_CHANGE_LANG_VALUE)
  {
    try
    {
      if(localStorage.getItem("language")  == 'default')
      {
        var key = 'en';      
      }  
      else
      {
        var key = localStorage.getItem("language");      
      }
      action.languageResources = initialState.languageResources;
      var idioma = localStorage.getItem("idioma");         
      var idiomaJSON = JSON.parse(idioma);
      
      var idiomaFinal = idiomaJSON[key].translation;    
      return {
        ...state,
        newValue1: action.newValue1,
        languageResources: idiomaFinal
      };
    }catch{}    
  }

  if (action.type == CLICK_UPDATE_VALUE) {
    return {
      ...state,
      newValue1: action.newValue1
    };
  } else if (action.type == CLICK_CHANGE_THEME_VALUE) {
    return {
      ...state,
      newValue1: action.newValue1
    };
  } else if (action.type == CLICK_CHANGE_LANG_VALUE) {    
    if(action.languageResources == 'default' && localStorage.getItem("language")  == 'default')
    {
      var key = 'en';      
    }  
    else
    {
      var key = localStorage.getItem("language");      
    }
    action.languageResources = initialState.languageResources;
    var idioma = localStorage.getItem("idioma");         
    var idiomaJSON = JSON.parse(idioma);
    
    var idiomaFinal = idiomaJSON[key].translation;    
    return {
      ...state,
      newValue1: action.newValue1,
      languageResources: idiomaFinal
    };
  } else {
    return state;
  }
};

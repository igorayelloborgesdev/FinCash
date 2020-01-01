import { CLICK_UPDATE_VALUE, CLICK_CHANGE_THEME_VALUE } from "../actions/TESTEactionTypes";
const initialState = {
  newValue1: "tema1_2"
};
export const TESTEclickReducer = (state = initialState, action) => {  
  if(localStorage.getItem('tema') != null && (action.type != CLICK_CHANGE_THEME_VALUE || action.type != CLICK_UPDATE_VALUE))
  {
    var tema = localStorage.getItem('tema');
    action.newValue1 = tema;    
    return {
      ...state,
      newValue1: action.newValue1
    };
  }

  if (action.type == CLICK_UPDATE_VALUE) 
  {    
      return {
        ...state,
        newValue1: action.newValue1
      };
  }
  else if (action.type == CLICK_CHANGE_THEME_VALUE)
  {
    return {
      ...state,
      newValue1: action.newValue1
    };
  }
  else
  {
    return state;
  }      
    
};

  // switch (action.type) {
  //   case CLICK_UPDATE_VALUE:
  //     return {
  //       ...state,
  //       newValue1: action.newValue1
  //     };
  //   case CLICK_CHANGE_THEME_VALUE:        
  //     return {
  //       ...state,
  //       newValue1: action.newValue1
  //     };
  //   default:
  //     return state;
  // }
// };

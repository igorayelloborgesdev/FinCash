import { CLICK_UPDATE_VALUE, CLICK_CHANGE_THEME_VALUE } from "../actions/TESTEactionTypes";
const initialState = {
  newValue1: "tema1_2"
};
export const TESTEclickReducer = (state = initialState, action) => {
  console.log("*********************************");
  console.log(action.newValue1);
  console.log(state.newValue1);
  console.log(action.type);

  switch (action.type) {
    case CLICK_UPDATE_VALUE:
      return {
        ...state,
        newValue1: action.newValue1
      };
    case CLICK_CHANGE_THEME_VALUE:        
      return {
        ...state,
        newValue1: action.newValue1
      };
    default:
      return state;
  }
};

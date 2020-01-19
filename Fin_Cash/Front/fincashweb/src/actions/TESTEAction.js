import {
  CLICK_UPDATE_VALUE,
  CLICK_CHANGE_THEME_VALUE,
  CLICK_CHANGE_LANG_VALUE,
  EVENT_CHECKAUTH_VALUE,
  EVENT_CHECKLOGOUT_VALUE
} from "./TESTEactionTypes";
import axios from "axios";
export const clickButton = value => ({
  type: CLICK_UPDATE_VALUE,
  newValue: value
});

export const clickTESTE = param1 => ({
  type: CLICK_UPDATE_VALUE,
  newValue: param1
});

export const clickChangeTheme = param1 => (
  localStorage.setItem("tema", param1),
  {
    type: CLICK_CHANGE_THEME_VALUE,
    newValue1: param1
  }
);

export const clickChangeLang = param1 => (
  localStorage.setItem("language", param1),
  {
    type: CLICK_CHANGE_LANG_VALUE,
    languageResources: param1
  }
);

export const checkAuth =
  (GetLoginData(),
  {
    type: EVENT_CHECKAUTH_VALUE
  });

function GetLoginData() {
  var user = JSON.parse(localStorage.getItem("user"));
  try
  {       
    if(user != null)
    {
      setTimeout(() => {
        fetchToken(user.id, user.token);    
      }, 1000);
    }        
  }catch(e)
  {
    console.log(e);
  }  
}

async function fetchToken(aUserID, aUserToken) {  
  try
  {    
    await axios.post("http://192.168.99.100:5005/validarToken",     
    {id_usuario: aUserID},
    { headers: {'Content-Type': 'application/json', 'token': aUserToken}}
    )
    .then(function(response) {      
      if(window.location.href != "http://localhost:3000/login")
      {
        console.log(response.data);
        if (response.data.code != 200) {
          window.location.href = 'http://localhost:3000/login';
        } 
      }      
    });
  }catch(e){
    console.log(e);
  }
   
}

export function GetLogoutExport() {
  console.log("LOGOUT");
  GetLogout();
  return {
    type: "LOGOUT_SUCCESS",
    obj: {}
  };
}

export async function GetLogout()
{
  try
  {    
    var user = JSON.parse(localStorage.getItem("user"));
    await axios.post("http://192.168.99.100:5005/logout",     
    {id_usuario: user.id},
    { headers: {'Content-Type': 'application/json', 'token': user.token}}
    )
    .then(function(response) {                  
        if (response.data.code == 200) {
          window.location.href = 'http://localhost:3000/login';
        }       
    });
  }catch(e){
    console.log(e);
  }
}
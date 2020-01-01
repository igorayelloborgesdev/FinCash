import React from "react";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import theme from 'styled-theming';

createGlobalStyle`
  @font-face {
    font-family: 'corbel';
    src: url('../../Resources/corbel.ttf');
  }
  @font-face {
    font-family: 'kartika';
    src: url('../../Resources/kartika.ttf');
  }
`;

const Background = theme('mode', {
    tema1_2: '#26273d',
    tema1_11: '#E6E8F5',
  });
  const H1_Color = theme('mode', {
    tema1_2: '#a3a7b0',
    tema1_11: '#7B678B',
  });
  const Input_Background = theme('mode', {
    tema1_2: '#26273d',
    tema1_11: '#FFFFFF',
  });
  const Input_LoginColor = theme('mode', {
    tema1_2: '#46B38C',
    tema1_11: '#4D6DB2',
  });
  const Input_LoginColorText = theme('mode', {
    tema1_2: '#DFDFDF',
    tema1_11: '#FFFFFF',
  });
  const Menu_Color = theme('mode', {
    tema1_2: '#26273d',
    tema1_11: '#E6E8F5',
  });
  const Menu_ColorText = theme('mode', {
    tema1_2: '#a3a7b0',
    tema1_11: '#7B678B',
  });
  const Card_Color = theme('mode', {
    tema1_2: '#fff0',
    tema1_11: '#FFFFFF',
  });
  const Card_ColorBG = theme('mode', {
    tema1_2: '#26273d',
    tema1_11: '#E6E8F5',
  });
  const Card_ColorText = theme('mode', {
    tema1_2: '#a3a7b0',
    tema1_11: '#7B678B',
  });
  const Box_Header = theme('mode', {
    tema1_2: '#26273d',
    tema1_11: '#FFFFFF',
  });

const Tema1_2_v2 = styled.div`
  background: ${Background}!important;  
  min-height: 100vh;
  h1{
    color: ${H1_Color};
    font-size: 30px;
    font-family: corbel;
    font-weight: 800;
    text-align: center;
  }
  input {
    background-color: ${Input_Background} !important;
    border-color: #a3a7b0 !important;
   
    border-radius: 2px !important;
    font-weight: 800;
    color: #a3a7b0;
  }
  input[type="text"]:focus {
    background-color: ${Input_Background} !important;
    border-color: #a3a7b0 !important;
   
    border-radius: 2px !important;
    font-weight: 800;
    color: #a3a7b0;
  }
  input[type="text"]:hover {
    background-color: ${Input_Background} !important;
    border-color: #a3a7b0 !important;
   
    border-radius: 2px !important;
    font-weight: 800;
    color: #a3a7b0;
  }
  input[type="text"]:focus:hover {
    background-color: ${Input_Background} !important;
    border-color: #a3a7b0 !important;
   
    border-radius: 2px !important;
    font-weight: 800;
    color: #a3a7b0;
  }
  input[type="text"]:blur {
    background-color: ${Input_Background} !important;
    border-color: #a3a7b0 !important;
   
    border-radius: 2px !important;
    font-weight: 800;
    color: #a3a7b0;
  }

  .btnLogin{
    background-color: ${Input_LoginColor}
    border-color: ${Input_LoginColor}
    width: 100%
    height: 40px  
    color: ${Input_LoginColorText}
    font-family: corbel
    font-weight: 800
    font-size: 18px
    border-width: thin
  }  
  
  .dropdown-menu {    
    color: ${Menu_ColorText};    
    background-color: ${Menu_Color};    
  }
  .dropdown-item {        
    background-color: transparent;    
    color: #eaeaea;
  }
  .dropdown-item:link {
    background-color: ${Menu_Color};
    color: ${Menu_ColorText};
  }
  .dropdown-item:visited {
    background-color: ${Menu_Color};
    color: ${Menu_ColorText};
  }
  .dropdown-item:hover {
    background-color: ${Menu_Color};
    color: ${Menu_ColorText};
  }
  .dropdown-item:active {
    background-color: ${Menu_Color};
    color: ${Menu_ColorText};
  }
  .card {
    background-color: ${Card_Color};
    border-radius: 10px;
    box-shadow: 0px 8px 8px #000000ab;
  }
  .css-1aya2g8 {
    background-color: ${Card_ColorBG} !important;    
    color: ${Card_ColorText};    
  }
  .css-1aya2g8 * {
    color: ${Card_ColorText};
  }
  .css-1aya2g8 * input {
    background-color: #ffffff00!important;
  }
  .DayPickerInput > input {
    background-color: ${Card_ColorBG} !important;
    border-color: #a3a7b0 !important;
   
    color: ${Card_ColorText};
    font-family: kartika;
    border-radius: 2px !important;
    height: 35px;
    width: 100%;
  }
  .inputCurrency {
    background-color: ${Card_ColorBG} !important;
    border-color: #a3a7b0 !important;   
    color: ${Card_ColorText};
  }
  .card-header {
    background-color: ${Box_Header};
    color: #a3a7b0 !important;
  }
`;
  
  const Theme1 = ({ children, modeID }) => (              
    <ThemeProvider theme={{mode: modeID}}>
      <Tema1_2_v2>{children}</Tema1_2_v2>
    </ThemeProvider>
  );
  
  export {Theme1};
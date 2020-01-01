import React from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import theme from 'styled-theming';




const boxBackgroundColor = theme('mode', {
  light: 'red',
  dark: 'blue',
});

const boxFontSize = theme('mode', {
  light: '10px',
  dark: '30px',
});

const TESTE3 = styled.div`
  background-color: ${boxBackgroundColor};
  h1{
    font-size: ${boxFontSize}!important;  
  }
  
`;

const Theme = ({ children, modeID }) => (  
  console.log("---------------------------"  + boxBackgroundColor),
  <ThemeProvider theme={{mode: modeID}}>
    <TESTE3>{children}</TESTE3>
  </ThemeProvider>
);

export {Theme};
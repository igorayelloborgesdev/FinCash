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

const Tema1_2_v2 = styled.div`
  background: ${Background}!important;  
  min-height: 100vh;
`;
  
  const Theme1 = ({ children, modeID }) => (              
    <ThemeProvider theme={{mode: modeID}}>
      <Tema1_2_v2>{children}</Tema1_2_v2>
    </ThemeProvider>
  );
  
  export {Theme1};
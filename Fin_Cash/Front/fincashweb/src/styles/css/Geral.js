import styled  from "styled-components";
import { createGlobalStyle } from "styled-components";

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
const Tema1_2 = styled.div`
  background: #26273d;
  min-height: 100%;
  min-height: 100vh;
`;

const Tema1_2_H1 = styled.h1`
  color: #a3a7b0;
  font-size: 30px;
  font-family: corbel;
  font-weight: 800;
  text-align: center;
`;

const Tema1_2_LoginCentralizar = styled.div`
  width: 350px;
  height: 250px;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 4px 15px 2px #000000ab .container {
    width: 300px;
    position: relative;
    top: 20px;
  }
`;

const Tema1_2_LoginBTN = styled.button`
background-color: #46B38C
border-color: #46B38C
width: 100%
height: 40px  
color: #DFDFDF
font-family: corbel
font-weight: 800
font-size: 18px
border-width: thin
button:onclick {
    width: 70px;
    height: 74px;
  }
`;

const Tema1_2_LoginInput = styled.div`
  input {
    background-color: #26273d !important;
    border-color: #a3a7b0 !important;
    border: 2px solid #a3a7b0 !important;
    border-radius: 2px !important;
    font-weight: 800;
    color: #a3a7b0;
  }
  input[type="text"]:focus {
    background-color: #26273d !important;
    border-color: #a3a7b0 !important;
    border: 2px solid #a3a7b0 !important;
    border-radius: 2px !important;
    font-weight: 800;
    color: #a3a7b0;
  }
  input[type="text"]:hover {
    background-color: #26273d !important;
    border-color: #a3a7b0 !important;
    border: 2px solid #a3a7b0 !important;
    border-radius: 2px !important;
    font-weight: 800;
    color: #a3a7b0;
  }
  input[type="text"]:focus:hover {
    background-color: #26273d !important;
    border-color: #a3a7b0 !important;
    border: 2px solid #a3a7b0 !important;
    border-radius: 2px !important;
    font-weight: 800;
    color: #a3a7b0;
  }
  input[type="text"]:blur {
    background-color: #26273d !important;
    border-color: #a3a7b0 !important;
    border: 2px solid #a3a7b0 !important;
    border-radius: 2px !important;
    font-weight: 800;
    color: #a3a7b0;
  }
`;

const Tema1_2_Menu = styled.div`
  .container {
    margin-left: 0px;
    margin-right: 0px;
  }
  .dropdown-toggle::after {
    border-top: 0em solid;
    border-right: 0em solid transparent;
    border-bottom: 0;
    border-left: 0em solid transparent;
  }
  .nav-pills .nav-link {
    border-radius: 0rem;
  }
  .nav-pills .nav-link.active,
  .nav-pills .show > .nav-link {
    color: #fff;
    background-color: #ffffff00;
  }
  .dropdown,
  .dropleft,
  .dropright,
  .dropup {
    position: relative;
    left: -60px;
    width: 60px;
    height: 40px;
  }
  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 10rem;
    padding: 0.5rem 0;
    margin: 0.125rem 0 0;
    font-size: 1rem;
    color: #a3a7b0;
    text-align: left;
    list-style: none;
    background-color: #26273d;
    background-clip: padding-box;
    border: 0px solid rgba(0, 0, 0, 0.15);
    border-radius: 0rem;
    box-shadow: 0px 8px 8px #000000ab;
  }
  .dropdown-item {
    display: block;
    width: 100%;
    padding: 0.25rem 1.5rem;
    clear: both;
    font-weight: 400;
    color: #eaeaea;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
  }
  .dropdown-item:link {
    background-color: #26273d;
    color: #a3a7b0;
  }
  .dropdown-item:visited {
    background-color: #26273d;
    color: #a3a7b0;
  }
  .dropdown-item:hover {
    background-color: #26273d;
    color: #a3a7b0;
  }
  .dropdown-item:active {
    background-color: #26273d;
    color: #a3a7b0;
  }
`;

const Icon = styled.span`
  width: 40px;
  height: 40px;
  display: inline-block;
  position: relative;
  top: 10px;
`;
const Tema1_2_CardContainer = styled.span`
  .container {
    max-width: 80%;
  }
  .card {
    background-color: #fff0;
    border-radius: 10px;
    box-shadow: 0px 8px 8px #000000ab;
  }

  label {
    font-family: kartika;
    color: #a3a7b0;
    position: relative;
    left: 50%;
    margin-left: -50px;
  }
  hr {
    border-top: 2px solid #a3a7b0;
  }
  .btn {
    position: relative;
    float: right;
    border-radius: 0px;
    width: 120px;
    font-size: 15px;
    font-weight: 800;
    height: 38px;
    border-color: #007bff00;
  }
  .btn:link {
    border-color: #007bff00;
  }
  .btn:visited {
    border-color: #007bff00;
  }
  .btn:hover {
    border-color: #007bff00;
  }
  .btn:active {
    border-color: #007bff00;
  }
  .btn-primary {
    background-color: #46b38c;
  }
  .btn-primary:hover {
    background-color: #46b38c;
    border-color: #0069d900;
  }
  .btn-secondary {
    background-color: #49bdd8;
    margin-right: 10px;
  }
  .btn-secondary:hover {
    background-color: #49bdd8;
    border-color: #0069d900;
  }
  .css-1aya2g8 {
    background-color: #26273d !important;
    border-color: #a3a7b0 !important;
    border: 2px solid #a3a7b0 !important;
    color: #a3a7b0;
    font-family: kartika;
  }

  .css-1aya2g8 * {
    color: #a3a7b0;
  }

  .DayPickerInput > input {
    background-color: #26273d !important;
    border-color: #a3a7b0 !important;
    border: 2px solid #a3a7b0 !important;
    color: #a3a7b0;
    font-family: kartika;
    border-radius: 2px !important;
    height: 35px;
    width: 100%;
  }

  .DayPickerInput {
    width: 100%;
  }

  .inputCurrency {
    background-color: #26273d !important;
    border-color: #a3a7b0 !important;
    border: 2px solid #a3a7b0 !important;
    color: #a3a7b0;
    font-family: kartika;
    border-radius: 2px !important;
    width: 100%;
    height: 35px;
  }
  .card-header {
    background-color: #26273d;
    color: #a3a7b0 !important;
  }
`;

const Tema1_2_CardBoxPos = styled.span`
  .cardBoxPos {
    position: relative;
    top: 70px;
  }
`;

const Tema1_2_Modal = styled.div`
  background-color: #26273d !important;
  border-radius: 10px !important;
  box-shadow: 0px 8px 8px #000000ab !important;
`;

const Tema1_2_BodyResultado = styled.div`
  th,
  td {
    font-family: kartika;
    color: #a3a7b0;
  }
  .page-item.active .page-link {
    z-index: 1;
    color: #fff;
    background-color: #46b38c;
    border-color: #007bff00;
  }
  .page-item:last-child .page-link {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  .page-item:first-child .page-link {
    margin-left: 0;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
  .page-link {
    position: relative;
    display: block;
    padding: 0.5rem 0.75rem;
    margin-left: -1px;
    line-height: 1.25;
    color: #ffffff;
    background-color: #49bdd8;
    border: 0px solid #dee2e6;
  }
`;

export {
  Tema1_2,
  Tema1_2_H1,
  Tema1_2_LoginCentralizar,
  Tema1_2_LoginBTN,
  Tema1_2_LoginInput,
  Tema1_2_Menu,
  Icon,
  Tema1_2_CardContainer,
  Tema1_2_CardBoxPos,
  Tema1_2_Modal,
  Tema1_2_BodyResultado,
};
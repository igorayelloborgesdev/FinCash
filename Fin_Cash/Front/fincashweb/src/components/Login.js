import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, Row, Col } from "reactstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { postlogin } from "../actions/index";

import { clickTESTE, clickChangeTheme, clickChangeLang } from "../actions/TESTEAction";

import {
  Tema1_2_H1,
  Tema1_2_LoginCentralizar,
  Tema1_2_LoginBTN,
  Tema1_2_LoginInput
} from "../styles/css/Geral";

import { Theme1 } from "../styles/css/Geral_v2";






// import ae from '../Resources/Translations/Idiomaar-AE.json'
// import de from '../Resources/Translations/Idiomade-DE.json'
// import en from '../Resources/Translations/Idiomaen-US.json'
// import es from '../Resources/Translations/Idiomaes-ES.json'
// import fr from '../Resources/Translations/Idiomafr_FR.json'
// import hi from '../Resources/Translations/Idiomahi_IN.json'
// import it from '../Resources/Translations/Idiomait_IT.json'
// import ja from '../Resources/Translations/Idiomaja_JP.json'
// import ko from '../Resources/Translations/Idiomako_KR.json'
// import pt from '../Resources/Translations/Idiomapt-PT.json'
// import ru from '../Resources/Translations/Idiomaru_RU.json'
// import zh from '../Resources/Translations/Idiomazh-CN.json'

// import i18n from "i18next";

// const resources = {
//   en: {
//     translation: en
//   },
//   pt: {
//     translation: pt
//   }
// };

// i18n.init({
//   resources,
//   lng: "en"
// });



  
class Login extends Component {
  constructor(props) {
    super(props);
    this.PostLoginData = this.PostLoginData.bind(this);
    this.PostclickChangeLang = this.PostclickChangeLang.bind(this);
    this.state = { login: "" };
    this.state = { pass: "" };
    this.state = { errologin: "" };
    this.state = { erropass: "" };         
    setTimeout(() => {      
      if(!localStorage.getItem('language'))
      {
        this.props.clickChangeLang('default');
      }
      else
      {
        this.props.clickChangeLang(localStorage.getItem('language'));
      }      
    }, 3000);    
  }

  render() {
    const { newValue1 } = this.props;       
    const { languageResources } = this.props;           
    return (
      <Theme1 modeID={newValue1}>
        <Tema1_2_LoginCentralizar>
          <div>
            <Container>
              <Row>
                <Col xl={12}>
                  <Tema1_2_H1>{languageResources.Login}</Tema1_2_H1>
                </Col>
              </Row>
              <Row>
                <Col xl={12}>
                  <Form>
                    <Form.Group controlId="formUsuario">
                      <Tema1_2_LoginInput>
                        <Form.Control
                          type="text"
                          placeholder={languageResources.Usuario}
                          onChange={evt => this.updateInputValueLogin(evt)}
                        />
                      </Tema1_2_LoginInput>
                      <span className="invalid-feedback d-block">
                        {this.state.errologin}
                      </span>
                    </Form.Group>
                    <Form.Group controlId="formPassword">
                      <Tema1_2_LoginInput>
                        <Form.Control
                          type="password"
                          placeholder={languageResources.Senha}
                          onChange={evt => this.updateInputValuePass(evt)}
                        />
                      </Tema1_2_LoginInput>
                      <span className="invalid-feedback d-block">
                        {this.state.erropass}
                      </span>
                    </Form.Group>
                    <Tema1_2_LoginBTN className="btnLogin" onClick={this.PostLoginData}>
                    {languageResources.Entrar}
                    </Tema1_2_LoginBTN>
                  </Form>
                </Col>
              </Row>
            </Container>
          </div>
        </Tema1_2_LoginCentralizar>
      </Theme1>
    );
  }
  PostclickChangeLang(event, id)
  {    
    event.preventDefault();
    this.props.clickChangeLang(id);
  }
  PostLoginData(event) {
    this.setState({
      errologin: "",
      erropass: ""
    });
    if (this.state.login == undefined) {
      this.setState({
        errologin: "Login obrigatório"
      });
    } else if (this.state.pass == undefined) {
      this.setState({
        erropass: "Senha obrigatória"
      });
    } else if (this.state.login.length == 0) {
      this.setState({
        errologin: "Login obrigatório"
      });
    } else if (this.state.pass.length == 0) {
      this.setState({
        erropass: "Senha obrigatória"
      });
    } else {
      event.preventDefault();
      this.props.postlogin(this.state.login, this.state.pass);
    }
  }
  updateInputValueLogin(evt) {
    this.setState({
      login: evt.target.value
    });
  }
  updateInputValuePass(evt) {
    this.setState({
      pass: evt.target.value
    });
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postlogin, clickChangeLang }, dispatch);
}

const mapStateToProps = store => ({
  newValue1: store.clickState.newValue1,
  languageResources: store.clickState.languageResources
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);

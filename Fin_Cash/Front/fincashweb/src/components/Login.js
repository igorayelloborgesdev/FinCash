import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, Row, Col } from "reactstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { postlogin } from "../actions/index";

import { clickTESTE, clickChangeTheme } from "../actions/TESTEAction";

import {
  Tema1_2_H1,
  Tema1_2_LoginCentralizar,
  Tema1_2_LoginBTN,
  Tema1_2_LoginInput
} from "../styles/css/Geral";

import { Theme1 } from "../styles/css/Geral_v2";

class Login extends Component {
  constructor(props) {
    super(props);
    this.PostLoginData = this.PostLoginData.bind(this);
    this.state = { login: "" };
    this.state = { pass: "" };
    this.state = { errologin: "" };
    this.state = { erropass: "" };
  }
  render() {
    const { newValue1 } = this.props;

    return (
      <Theme1 modeID={newValue1}>
        <Tema1_2_LoginCentralizar>
          <div>
            <Container>
              <Row>
                <Col xl={12}>
                  <Tema1_2_H1>Login</Tema1_2_H1>
                </Col>
              </Row>
              <Row>
                <Col xl={12}>
                  <Form>
                    <Form.Group controlId="formUsuario">
                      <Tema1_2_LoginInput>
                        <Form.Control
                          type="text"
                          placeholder="Usuário"
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
                          placeholder="Senha"
                          onChange={evt => this.updateInputValuePass(evt)}
                        />
                      </Tema1_2_LoginInput>
                      <span className="invalid-feedback d-block">
                        {this.state.erropass}
                      </span>
                    </Form.Group>
                    <Tema1_2_LoginBTN className="btnLogin" onClick={this.PostLoginData}>
                      Entrar
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
  return bindActionCreators({ postlogin }, dispatch);
}

const mapStateToProps = store => ({
  newValue1: store.clickState.newValue1
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);

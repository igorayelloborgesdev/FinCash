import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dashboard from "./Dashboard";
import IncluirMovimentacao from "./IncluirMovimentacao";
import ConsultarMovimentacao from "./ConsultarMovimentacao";
import logo from "../Resources/burgerMenu.png";
import { Tema1_2_Menu, Icon } from "../styles/css/Geral";

import { Theme } from "../styles/css/TESTE";
import { clickTESTE, clickChangeTheme, clickChangeLang, GetLogoutExport } from "../actions/TESTEAction";
import { Theme1 } from "../styles/css/Geral_v2";

class Home extends Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
    this.PostclickTESTE = this.PostclickTESTE.bind(this);   
    this.PostclickChangeLang = this.PostclickChangeLang.bind(this); 
    this.GetClickLogout = this.GetClickLogout.bind(this);
  }
  state = {
    themeMode: "light"
  };
  redirect(name) {
    window.location.href = name;
  }
  render() {
    const { newValue } = this.props;
    const { newValue1 } = this.props;
    const { languageResources } = this.props;           

    return (
      <Theme1 modeID={newValue1}>
        <Tema1_2_Menu className="menuName">
          <Container>
            <Row>
              <Col md={12}>
                <Nav variant="pills">
                  <Icon>
                    <img src={logo} alt="logo" />
                  </Icon>
                  <NavDropdown title="" id="nav-dropdown">
                    <NavDropdown.Item
                      eventKey="1.1"
                      onClick={() => this.redirect("/")}
                    >
                      {languageResources.Dashboard}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      eventKey="1.2"
                      onClick={() => this.redirect("/IncluirMovimentacao")}
                    >
                      {languageResources.IncluirMovimentacao}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      eventKey="1.3"
                      onClick={() => this.redirect("/ConsultarMovimentacao")}
                    >
                      {languageResources.ConsultarMovimentacao}
                    </NavDropdown.Item>
                    <hr></hr>
                    <NavDropdown.Item
                      eventKey="2.1"
                      onClick={e => this.ChangeTheme(e, "tema1_2")}
                    >
                      {languageResources.Tema1}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      eventKey="2.2"
                      onClick={e => this.ChangeTheme(e, "tema1_11")}
                    >
                      {languageResources.Tema2}
                    </NavDropdown.Item>
                    <hr></hr>
                    <NavDropdown.Item
                      eventKey="3.1"
                      onClick={e => this.PostclickChangeLang(e, "en")}
                    >
                      {languageResources.Ingles}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      eventKey="3.2"
                      onClick={e => this.PostclickChangeLang(e, "pt")}
                    >
                      {languageResources.Portugues}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      eventKey="3.3"
                      onClick={e => this.PostclickChangeLang(e, "ae")}
                    >
                      {languageResources.Arabe}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      eventKey="3.4"
                      onClick={e => this.PostclickChangeLang(e, "de")}
                    >
                      {languageResources.Alemao}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      eventKey="3.5"
                      onClick={e => this.PostclickChangeLang(e, "es")}
                    >
                      {languageResources.Espanhol}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      eventKey="3.6"
                      onClick={e => this.PostclickChangeLang(e, "fr")}
                    >
                      {languageResources.Frances}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      eventKey="3.7"
                      onClick={e => this.PostclickChangeLang(e, "hi")}
                    >
                      {languageResources.Hindi}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      eventKey="3.8"
                      onClick={e => this.PostclickChangeLang(e, "it")}
                    >
                      {languageResources.Italiano}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      eventKey="3.9"
                      onClick={e => this.PostclickChangeLang(e, "ja")}
                    >
                      {languageResources.Japones}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      eventKey="3.10"
                      onClick={e => this.PostclickChangeLang(e, "ko")}
                    >
                      {languageResources.Coreano}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      eventKey="3.11"
                      onClick={e => this.PostclickChangeLang(e, "ru")}
                    >
                      {languageResources.Russo}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      eventKey="3.12"
                      onClick={e => this.PostclickChangeLang(e, "zh")}
                    >
                      {languageResources.Chines}
                    </NavDropdown.Item>
                    <hr></hr>
                    <NavDropdown.Item
                      eventKey="4.1"
                      onClick={e => this.GetClickLogout(e)}
                    >
                      {languageResources.Voltar}
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Col>
            </Row>
          </Container>
        </Tema1_2_Menu>
        <Router>
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route exact path="/IncluirMovimentacao">
              <IncluirMovimentacao />
            </Route>
            <Route exact path="/ConsultarMovimentacao">
              <ConsultarMovimentacao />
            </Route>
          </Switch>
        </Router>
      </Theme1>
    );
  }
  PostclickTESTE(event) {
    event.preventDefault();
    this.props.clickTESTE("HAMILTON");
  }
  ChangeTheme(event, id) {
    event.preventDefault();
    this.setState({ themeMode: id });
    this.props.clickChangeTheme(id);
  }
  PostclickChangeLang(event, id)
  {        
    event.preventDefault();
    this.props.clickChangeLang(id);
  }
  GetClickLogout(event)
  {        
    event.preventDefault();    
    this.props.GetLogoutExport();
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ clickTESTE, clickChangeTheme, clickChangeLang, GetLogoutExport }, dispatch);
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue,
  newValue1: store.clickState.newValue1,
  languageResources: store.clickState.languageResources
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);

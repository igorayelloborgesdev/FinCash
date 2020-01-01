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
import { clickTESTE, clickChangeTheme } from "../actions/TESTEAction";
import { Theme1 } from "../styles/css/Geral_v2";


class Home extends Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
    this.PostclickTESTE = this.PostclickTESTE.bind(this);
    // this.PostclickChangeTheme = this.PostclickChangeTheme.bind(this);
    // this.props.clickTESTE("HAMILTON");
  }
  state = {
    themeMode: "light",    
  };
  redirect(name) {
    window.location.href = name;
  }    
  render() {
    const { newValue } = this.props;
    const { newValue1 } = this.props;

    return (            
        <Theme1 modeID={newValue1}>         
        <Tema1_2_Menu>
          <Container>
            <Row>
              <Col md={12}>
                <Nav variant="pills">
                  <Icon>
                    <img src={logo} alt="logo" />
                  </Icon>
                  <NavDropdown title="" id="nav-dropdown">

                  
                    {/* <Theme>
                      <h1>{newValue1}</h1>
                    </Theme>
                    <Theme1 modeID={this.state.themeMode}>                  
                     <h1>Hello World</h1>
                     <p>Lorem Ipsum</p>                    
                    </Theme1>  */}

                    
                    <NavDropdown.Item
                      eventKey="1.1"
                      onClick={() => this.redirect("/")}
                    >
                      Dashboard
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      eventKey="1.2"
                      onClick={() => this.redirect("/IncluirMovimentacao")}
                    >
                      Incluir movimentação
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      eventKey="1.3"
                      onClick={() => this.redirect("/ConsultarMovimentacao")}
                    >
                      Consultar movimentação
                    </NavDropdown.Item>
                    <hr></hr>
                    <NavDropdown.Item
                      eventKey="2.1"
                      onClick={(e) => this.ChangeTheme(e, 'tema1_2')}
                    >
                      Tema 1
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      eventKey="2.2"
                      onClick={(e) => this.ChangeTheme(e, 'tema1_11')}
                    >
                      Tema 2
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
  PostclickTESTE(event){        
    event.preventDefault();
    this.props.clickTESTE("HAMILTON");
  }
  ChangeTheme(event, id) {              
    event.preventDefault();
    this.setState({ themeMode: id });       
    this.props.clickChangeTheme(id); 
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ clickTESTE, clickChangeTheme }, dispatch);
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue,
  newValue1: store.clickState.newValue1
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
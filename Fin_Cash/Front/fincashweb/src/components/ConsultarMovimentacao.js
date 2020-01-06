import React, { Component } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, Row, Col } from "reactstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Select from "react-select";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import DayPickerInput from "react-day-picker/DayPickerInput";

import {
  Tema1_2_H1,
  Tema1_2_LoginCentralizar,
  Tema1_2_LoginBTN,
  Tema1_2_LoginInput,
  Tema1_2_CardContainer,
  Tema1_2_BodyResultado  
} from "../styles/css/Geral";

import { clickChangeLang } from "../actions/TESTEAction";

var ReactBsTable = require("react-bootstrap-table");
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

const scaryAnimals = [
  { label: "Alligators", value: 1 },
  { label: "Crocodiles", value: 2 },
  { label: "Small crocodiles", value: 4 },
  { label: "Smallest crocodiles", value: 5 },
  { label: "Snakes", value: 6 }
];

const products = [
  {
    id: 1,
    name: "Product1",
    price: 120
  },
  {
    id: 2,
    name: "Product2",
    price: 80
  },
  {
    id: 1,
    name: "Product1",
    price: 120
  },
  {
    id: 2,
    name: "Product2",
    price: 80
  },
  {
    id: 1,
    name: "Product1",
    price: 120
  },
  {
    id: 2,
    name: "Product2",
    price: 80
  },
  {
    id: 1,
    name: "Product1",
    price: 120
  },
  {
    id: 2,
    name: "Product2",
    price: 80
  },
  {
    id: 1,
    name: "Product1",
    price: 120
  },
  {
    id: 2,
    name: "Product2",
    price: 80
  },
  {
    id: 1,
    name: "Product1",
    price: 120
  },
  {
    id: 2,
    name: "Product2",
    price: 80
  },
  {
    id: 1,
    name: "Product1",
    price: 120
  },
  {
    id: 2,
    name: "Product2",
    price: 80
  },
  {
    id: 1,
    name: "Product1",
    price: 120
  },
  {
    id: 2,
    name: "Product2",
    price: 80
  },
  {
    id: 1,
    name: "Product1",
    price: 120
  },
  {
    id: 2,
    name: "Product2",
    price: 80
  },
  {
    id: 1,
    name: "Product1",
    price: 120
  },
  {
    id: 2,
    name: "Product2",
    price: 80
  }
];

class ConsultarMovimentacao extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    listitems: [
      { name: "shashank", age: 20 },
      { name: "vardan", age: 30 },
      { name: "somya", age: 40 }
    ],
    value: "",
    NumeroDocumento: ""
  };

  onHandleChangeNumeric = event => {
    const re = /^[0-9\b]+$/;
    if (event.target.value == "" || re.test(event.target.value)) {
      this.setState({ NumeroDocumento: event.target.value });
    }
  };

  render() {    

    const { languageResources } = this.props;           

    return (
      <div className="cardBoxPos">        
        <Tema1_2_H1>{languageResources.ConsultaMovimentacoesFinanceirasPagar}</Tema1_2_H1>
        <Tema1_2_CardContainer>
          <Container>
            <Row>
              <Col md={12}>
                <Card>
                  <Card.Header>
                    <h3>{languageResources.Filtros}</h3>
                    <hr></hr>
                  </Card.Header>
                  <Card.Body>
                    <Row>
                      <Col md={3}>
                      <label>{languageResources.MatrizContabil}</label>
                        <Row>
                          <Col md={12}>
                            <div className="container">
                              <Select options={scaryAnimals} />
                            </div>
                          </Col>
                        </Row>
                      </Col>
                      <Col md={3}>
                      <label>{languageResources.Filial}</label>
                        <Row>
                          <Col md={12}>
                            <div className="container">
                              <Select options={scaryAnimals} />
                            </div>
                          </Col>
                        </Row>
                      </Col>
                      <Col md={3}>
                      <label>{languageResources.ContaCorrente}</label>
                        <Row>
                          <Col md={12}>
                            <div className="container">
                              <Select options={scaryAnimals} />
                            </div>
                          </Col>
                        </Row>
                      </Col>
                      <Col md={3}>
                      <label>{languageResources.ContaDespesa}</label>
                        <Row>
                          <Col md={12}>
                            <div className="container">
                              <Select options={scaryAnimals} />
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                      <label>{languageResources.Fornecedor}</label>
                        <Row>
                          <Col md={12}>
                            <div className="container">
                              <Select options={scaryAnimals} />
                            </div>
                          </Col>
                        </Row>
                      </Col>
                      <Col md={6}>
                      <label>{languageResources.Operacao}</label>
                        <Row>
                          <Col md={12}>
                            <div className="container">
                              <Select options={scaryAnimals} />
                            </div>
                          </Col>
                        </Row>
                      </Col>                     
                    </Row>
                    <Row>
                      <Col md={3}>
                      <label>{languageResources.DataEmissao}</label>
                        <Row>
                          <Col md={6}>
                            <DayPickerInput
                              onDayChange={day => console.log(day)}
                            />
                          </Col>
                          <Col md={6}>
                            <DayPickerInput
                              onDayChange={day => console.log(day)}
                            />
                          </Col>
                        </Row>
                      </Col>
                      <Col md={3}>
                      <label>{languageResources.DataCompetencia}</label>
                        <Row>
                          <Col md={6}>
                            <DayPickerInput
                              onDayChange={day => console.log(day)}
                            />
                          </Col>
                          <Col md={6}>
                            <DayPickerInput
                              onDayChange={day => console.log(day)}
                            />
                          </Col>
                        </Row>
                      </Col>
                      <Col md={3}>
                      <label>{languageResources.DataVencimento}</label>
                        <Row>
                          <Col md={6}>
                            <DayPickerInput
                              onDayChange={day => console.log(day)}
                            />
                          </Col>
                          <Col md={6}>
                            <DayPickerInput
                              onDayChange={day => console.log(day)}
                            />
                          </Col>
                        </Row>
                      </Col>
                      <Col md={3}>
                      <label>{languageResources.DataBaixa}</label>
                        <Row>
                          <Col md={6}>
                            <DayPickerInput
                              onDayChange={day => console.log(day)}
                            />
                          </Col>
                          <Col md={6}>
                            <DayPickerInput
                              onDayChange={day => console.log(day)}
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <hr></hr>
                    <Row>
                      <Col md={12}>
                        <Button variant="primary">{languageResources.Pesquisar}</Button>
                        <Button variant="secondary">{languageResources.Limpar}</Button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Tema1_2_CardContainer>
        <Tema1_2_CardContainer>          
            <Container>
              <Card>
                <Card.Header>
                  <h3>{languageResources.Resultado}</h3>
                  <hr></hr>
                </Card.Header>
                <Tema1_2_BodyResultado>
                  <Card.Body>
                    <Row>
                      <Col md={12}>
                        <BootstrapTable
                          data={products}
                          pagination
                          striped
                          hover
                        >
                          <TableHeaderColumn isKey dataField="id">
                            Product ID
                          </TableHeaderColumn>
                          <TableHeaderColumn dataField="name">
                            Product Name
                          </TableHeaderColumn>
                          <TableHeaderColumn dataField="price">
                            Product Price
                          </TableHeaderColumn>
                        </BootstrapTable>
                      </Col>
                    </Row>
                  </Card.Body>
                </Tema1_2_BodyResultado>
              </Card>
            </Container>          
        </Tema1_2_CardContainer>        
      </div>
    );
  }
}

const mapStateToProps = store => ({  
  languageResources: store.clickState.languageResources
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({clickChangeLang}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ConsultarMovimentacao);

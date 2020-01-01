import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, Row, Col } from "reactstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Select from "react-select";
import ListGroup from "react-bootstrap/ListGroup";
import DayPickerInput from "react-day-picker/DayPickerInput";
import CurrencyInput from "react-currency-input";
import { postModalCall } from "../actions/index";
import { useState } from "react";
import ModalCustom from "./Modal";
import {
  Tema1_2_H1,
  Tema1_2_CardContainer,
  Tema1_2_CardBoxPos,
  Tema1_2_Modal
} from "../styles/css/Geral";

const scaryAnimals = [
  { label: "Alligators", value: 1 },
  { label: "Crocodiles", value: 2 },
  { label: "Sharks", value: 3 },
  { label: "Small crocodiles", value: 4 },
  { label: "Smallest crocodiles", value: 5 },
  { label: "Snakes", value: 6 }
];

class IncluirMovimentacao extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    errologin: "",
    listitems: [
      { name: "shashank", age: 20 },
      { name: "vardan", age: 30 },
      { name: "somya", age: 40 }
    ],
    value: "",
    NumeroDocumento: "",
    amount: 0.0,
    modalShow: false,
    setModalShow: false
  };
  handleChange = event => {
    this.setState({ amount: event.target.value });
  };

  modalCall = event => {
    this.setState({ modalShow: !this.state.modalShow });
    this.setState({ setModalShow: !this.state.setModalShow });
    event.preventDefault();
  };

  render() {

    const { newValue } = this.props;

    return (
      <Tema1_2_CardBoxPos>
        <div className="cardBoxPos">

        <h1>{newValue}</h1>

          <Tema1_2_H1>Incluir Movimentação</Tema1_2_H1>
          <Tema1_2_CardContainer>
            <Container>
              <Row>
                <Col md={12}>
                  <Card>
                    <Card.Body>                      
                      <Row className="rowContainer">
                        <Col md={6} xl={3}>
                          <label>Matriz Contábil</label>
                          <div className="container containerInput">
                            <Select options={scaryAnimals} />
                          </div>
                          <span className="invalid-feedback d-block">
                            {this.state.errologin}
                          </span>
                        </Col>
                        <Col md={6} xl={3}>
                          <label>Filial</label>
                          <div className="container">
                            <Select options={scaryAnimals} />
                          </div>
                          <span className="invalid-feedback d-block">
                            {this.state.errologin}
                          </span>
                        </Col>
                        <Col md={6} xl={3}>
                          <label>Conta Corrente</label>
                          <div className="container">
                            <Select options={scaryAnimals} />
                          </div>
                          <span className="invalid-feedback d-block">
                            {this.state.errologin}
                          </span>
                        </Col>
                        <Col md={6} xl={3}>
                          <label>Conta Despesa</label>
                          <div className="container">
                            <Select options={scaryAnimals} />
                          </div>
                          <span className="invalid-feedback d-block">
                            {this.state.errologin}
                          </span>
                        </Col>


                        <Col md={6}>
                          <label>Fornecedor</label>
                          <div className="container">
                            <Select options={scaryAnimals} />
                          </div>
                          <span className="invalid-feedback d-block">
                            {this.state.errologin}
                          </span>
                        </Col>
                        <Col md={6}>
                          <label>Operação</label>
                          <div className="container">
                            <Select options={scaryAnimals} />
                          </div>
                          <span className="invalid-feedback d-block">
                            {this.state.errologin}
                          </span>
                        </Col>


                        <Col md={3}>
                          <label>Data de emissão</label>
                          <Row>
                            <Col md={12}>
                              <DayPickerInput
                                onDayChange={day => console.log(day)}
                              />
                            </Col>                            
                          </Row>
                          <span className="invalid-feedback d-block">
                            {this.state.errologin}
                          </span>
                        </Col>
                        <Col md={3}>
                          <label>Data de emissão</label>
                          <Row>
                          <Col md={12}>
                              <DayPickerInput
                                onDayChange={day => console.log(day)}
                              />
                            </Col>                            
                          </Row>
                          <span className="invalid-feedback d-block">
                            {this.state.errologin}
                          </span>
                        </Col>
                        <Col md={3}>
                          <label>Data de emissão</label>
                          <Row>
                            <Col md={12}>
                              <DayPickerInput
                                onDayChange={day => console.log(day)}
                              />
                            </Col>                            
                          </Row>
                          <span className="invalid-feedback d-block">
                            {this.state.errologin}
                          </span>
                        </Col>
                        <Col md={3}>
                          <label>Data de emissão</label>
                          <Row>
                            <Col md={12}>
                              <DayPickerInput
                                onDayChange={day => console.log(day)}
                              />
                            </Col>                            
                          </Row>
                          <span className="invalid-feedback d-block">
                            {this.state.errologin}
                          </span>
                        </Col>

                        <Col md={3}>
                          <label>Valor Original</label>
                          <Row>
                            <Col md={12}>
                              <CurrencyInput
                                className="inputCurrency"
                                value={this.state.amount}
                                onChangeEvent={this.handleChange}
                              />
                            </Col>
                          </Row>
                          <span className="invalid-feedback d-block">
                            {this.state.errologin}
                          </span>
                        </Col>
                        <Col md={3}>
                          <label>Valor Baixado</label>
                          <Row>
                            <Col md={12}>
                              <CurrencyInput
                                className="inputCurrency"
                                value={this.state.amount}
                                onChangeEvent={this.handleChange}
                              />
                            </Col>
                          </Row>
                          <span className="invalid-feedback d-block">
                            {this.state.errologin}
                          </span>
                        </Col>
                        <Col md={3}>
                          <label>Valor Caixa corrente</label>
                          <Row>
                            <Col md={12}>
                              <CurrencyInput
                                className="inputCurrency"
                                value={this.state.amount}
                                onChangeEvent={this.handleChange}
                              />
                            </Col>
                          </Row>
                          <span className="invalid-feedback d-block">
                            {this.state.errologin}
                          </span>
                        </Col>
                        <Col md={3}>
                          <label>Valor Receita despesa</label>
                          <Row>
                            <Col md={12}>
                              <CurrencyInput
                                className="inputCurrency"
                                value={this.state.amount}
                                onChangeEvent={this.handleChange}
                              />
                            </Col>
                          </Row>
                          <span className="invalid-feedback d-block">
                            {this.state.errologin}
                          </span>
                        </Col>
                        <Col md={12}>
                        <hr></hr>
                          <Button variant="primary" onClick={this.modalCall}>
                            Incluir
                          </Button>
                          <Button variant="secondary">Limpar</Button>
                        </Col>
                      </Row>                                            
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Tema1_2_CardContainer>
          <Tema1_2_Modal>
            <div className="TESTE">
              <ModalCustom
                show={this.state.modalShow}
                onHide={() => this.setState({ modalShow: false })}
              ></ModalCustom>
            </div>
          </Tema1_2_Modal>
        </div>
      </Tema1_2_CardBoxPos>
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postModalCall }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(IncluirMovimentacao);

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
import { clickChangeLang } from "../actions/TESTEAction";

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
    const { languageResources } = this.props;           

    return (
      <Tema1_2_CardBoxPos>
        <div className="cardBoxPos">
        
          <Tema1_2_H1>{languageResources.IncluirMovimentacao}</Tema1_2_H1>
          <Tema1_2_CardContainer>
            <Container>
              <Row>
                <Col md={12}>
                  <Card>
                    <Card.Body>                      
                      <Row className="rowContainer">
                        <Col md={6} xl={3}>
                          <label>{languageResources.MatrizContabil}</label>
                          <div className="container containerInput">
                            <Select options={scaryAnimals} />
                          </div>
                          <span className="invalid-feedback d-block">
                            {this.state.errologin}
                          </span>
                        </Col>
                        <Col md={6} xl={3}>
                          <label>{languageResources.Filial}</label>
                          <div className="container">
                            <Select options={scaryAnimals} />
                          </div>
                          <span className="invalid-feedback d-block">
                            {this.state.errologin}
                          </span>
                        </Col>
                        <Col md={6} xl={3}>
                          <label>{languageResources.ContaCorrente}</label>
                          <div className="container">
                            <Select options={scaryAnimals} />
                          </div>
                          <span className="invalid-feedback d-block">
                            {this.state.errologin}
                          </span>
                        </Col>
                        <Col md={6} xl={3}>
                          <label>{languageResources.ContaDespesa}</label>
                          <div className="container">
                            <Select options={scaryAnimals} />
                          </div>
                          <span className="invalid-feedback d-block">
                            {this.state.errologin}
                          </span>
                        </Col>


                        <Col md={6}>
                          <label>{languageResources.Fornecedor}</label>
                          <div className="container">
                            <Select options={scaryAnimals} />
                          </div>
                          <span className="invalid-feedback d-block">
                            {this.state.errologin}
                          </span>
                        </Col>
                        <Col md={6}>
                          <label>{languageResources.Operacao}</label>
                          <div className="container">
                            <Select options={scaryAnimals} />
                          </div>
                          <span className="invalid-feedback d-block">
                            {this.state.errologin}
                          </span>
                        </Col>


                        <Col md={3}>
                          <label>{languageResources.DataEmissao}</label>
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
                          <label>{languageResources.DataCompetencia}</label>
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
                          <label>{languageResources.DataVencimento}</label>
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
                          <label>{languageResources.DataBaixa}</label>
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
                          <label>{languageResources.ValorOriginal}</label>
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
                        <label>{languageResources.ValorBaixado}</label>
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
                        <label>{languageResources.ValorContrapartida}</label>
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
                        <label>{languageResources.EntradaContaDespesa}</label>
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
                          {languageResources.Pesquisar}
                          </Button>
                          <Button variant="secondary">
                          {languageResources.Limpar}
                          </Button>
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
  newValue: store.clickState.newValue,
  languageResources: store.clickState.languageResources
});
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postModalCall, clickChangeLang }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(IncluirMovimentacao);
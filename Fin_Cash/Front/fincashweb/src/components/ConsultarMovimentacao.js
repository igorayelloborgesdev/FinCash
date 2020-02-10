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
import { postSelect } from "../actions/index";

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
    this.PostSelect = this.PostSelect.bind(this);
    this.state = { contaCorrenteID: "" };
    this.state = { contaDespesaID: "" };
    this.state = { filialID: "" };
    this.state = { fornecedoresID: "" };
    this.state = { matrizID: "" };
    this.state = { tipoDocumentoID: "" };
    this.state = { dataEmissao1: "" };
    this.state = { dataEmissao2: "" };
    this.state = { dataCompetencia1: "" };
    this.state = { dataCompetencia2: "" };
    this.state = { dataVencimento1: "" };
    this.state = { dataVencimento2: "" };
    this.state = { dataBaixa1: "" };
    this.state = { dataBaixa2: "" };    
    this.state = { movimentacoes: [] };        
  }
  state = {
    listitems: [
      { name: "shashank", age: 20 },
      { name: "vardan", age: 30 },
      { name: "somya", age: 40 }
    ],
    value: "",
    NumeroDocumento: "",

    ContaCorrente: JSON.parse(localStorage.getItem("ContaCorrente")),
    Filial: JSON.parse(localStorage.getItem("Filial")),
    ContaDespesa: JSON.parse(localStorage.getItem("ContaDespesa")),
    Empresa: JSON.parse(localStorage.getItem("Empresa")),
  };

  onHandleChangeNumeric = event => {
    const re = /^[0-9\b]+$/;
    if (event.target.value == "" || re.test(event.target.value)) {
      this.setState({ NumeroDocumento: event.target.value });
    }
  };

  render() {    

    this.state.ContaCorrente = JSON.parse(localStorage.getItem("ContaCorrente"));
    this.state.ContaCorrente = this.state.ContaCorrente.map(function(item, indice){      
        var newItem = { label: item.name, value: item.id };      
        return newItem;
    });         
    this.state.Filial = JSON.parse(localStorage.getItem("Filial"));
    this.state.Filial = this.state.Filial.map(function(item, indice){      
        var newItem = { label: item.name, value: item.id };      
        return newItem;
    });
    this.state.ContaDespesa = JSON.parse(localStorage.getItem("ContaDespesa"));
    this.state.ContaDespesa = this.state.ContaDespesa.map(function(item, indice){      
        var newItem = { label: item.name, value: item.id };      
        return newItem;
    });
    this.state.Empresa = JSON.parse(localStorage.getItem("Empresa"));
    this.state.Empresa = this.state.Empresa.map(function(item, indice){      
        var newItem = { label: item.name, value: item.id };      
        return newItem;
    });
    this.state.Fornecedor = JSON.parse(localStorage.getItem("Fornecedor"));
    this.state.Fornecedor = this.state.Fornecedor.map(function(item, indice){      
        var newItem = { label: item.name, value: item.id };      
        return newItem;
    });
    this.state.Operacao = JSON.parse(localStorage.getItem("Operacao"));
    this.state.Operacao = this.state.Operacao.map(function(item, indice){      
        var newItem = { label: item.name, value: item.id };      
        return newItem;
    });
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
                              <Select options={this.state.Empresa} onChange={evt => this.updateInputEmpresa(evt)}/>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                      <Col md={3}>
                      <label>{languageResources.Filial}</label>
                        <Row>
                          <Col md={12}>
                            <div className="container">
                              <Select options={this.state.Filial} onChange={evt => this.updateInputFilial(evt)}/>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                      <Col md={3}>
                      <label>{languageResources.ContaCorrente}</label>
                        <Row>
                          <Col md={12}>
                            <div className="container">
                              <Select options={this.state.ContaCorrente} onChange={evt => this.updateInputContaCorrente(evt)}/>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                      <Col md={3}>
                      <label>{languageResources.ContaDespesa}</label>
                        <Row>
                          <Col md={12}>
                            <div className="container">
                              <Select options={this.state.ContaDespesa} onChange={evt => this.updateInputContaDespesa(evt)}/>
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
                              <Select options={this.state.Fornecedor} onChange={evt => this.updateInputFornecedor(evt)}/>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                      <Col md={6}>
                      <label>{languageResources.Operacao}</label>
                        <Row>
                          <Col md={12}>
                            <div className="container">
                              <Select options={this.state.Operacao} onChange={evt => this.updateInputOperacao(evt)}/>
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
                              onDayChange={day => this.updateInputdataEmissao1(day)}
                            />
                          </Col>
                          <Col md={6}>
                            <DayPickerInput
                              onDayChange={day => this.updateInputdataEmissao2(day)}
                            />
                          </Col>
                        </Row>
                      </Col>
                      <Col md={3}>
                      <label>{languageResources.DataCompetencia}</label>
                        <Row>
                          <Col md={6}>
                            <DayPickerInput
                              onDayChange={day => this.dataCompetencia1(day)}
                            />
                          </Col>
                          <Col md={6}>
                            <DayPickerInput
                              onDayChange={day => this.dataCompetencia2(day)}
                            />
                          </Col>
                        </Row>
                      </Col>
                      <Col md={3}>
                      <label>{languageResources.DataVencimento}</label>
                        <Row>
                          <Col md={6}>
                            <DayPickerInput
                              onDayChange={day => this.dataVencimento1(day)}
                            />
                          </Col>
                          <Col md={6}>
                            <DayPickerInput
                              onDayChange={day => this.dataVencimento2(day)}
                            />
                          </Col>
                        </Row>
                      </Col>
                      <Col md={3}>
                      <label>{languageResources.DataBaixa}</label>
                        <Row>
                          <Col md={6}>
                            <DayPickerInput
                              onDayChange={day => this.dataBaixa1(day)}
                            />
                          </Col>
                          <Col md={6}>
                            <DayPickerInput
                              onDayChange={day => this.dataBaixa2(day)}
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <hr></hr>
                    <Row>
                      <Col md={12}>
                        <Button variant="primary" onClick={this.PostSelect}>{languageResources.Pesquisar}</Button>
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
                          data={this.state.movimentacoes}
                          pagination
                          striped
                          hover
                        >
                          <TableHeaderColumn isKey dataField="contaCorrenteNome">
                          {languageResources.ContaCorrente}
                          </TableHeaderColumn>
                          <TableHeaderColumn dataField="filialNome">
                          {languageResources.Filial}
                          </TableHeaderColumn>
                          <TableHeaderColumn dataField="fornecedorNome">
                          {languageResources.Fornecedor}
                          </TableHeaderColumn>
                          <TableHeaderColumn dataField="tipoDocumentoNome">
                          {languageResources.NDocumento}
                          </TableHeaderColumn>
                          <TableHeaderColumn dataField="matrizNome">
                          {languageResources.MatrizContabil}
                          </TableHeaderColumn>
                          <TableHeaderColumn dataField="valorOriginal">
                          {languageResources.ValorOriginal}
                          </TableHeaderColumn>
                          <TableHeaderColumn dataField="valorBaixado">
                          {languageResources.ValorBaixado}
                          </TableHeaderColumn>
                          <TableHeaderColumn dataField="valorContrapartida">
                          {languageResources.ValorContrapartida}
                          </TableHeaderColumn>
                          <TableHeaderColumn dataField="valorCaixaCorrente">
                          {languageResources.ValorOriginal}
                          </TableHeaderColumn>
                          <TableHeaderColumn dataField="valorReceitaDespesa">
                          {languageResources.ValorContrapartida}
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
  updateInputContaCorrente(evt) {    
    this.setState({
      contaCorrenteID: evt.value
    });
  }
  updateInputFilial(evt) {    
    this.setState({
      filialID: evt.value
    });
  }
  updateInputContaDespesa(evt) {    
    this.setState({
      contaDespesaID: evt.value
    });
  }
  updateInputFornecedor(evt) {    
    this.setState({
      fornecedoresID: evt.value
    });
  }
  updateInputEmpresa(evt) {    
    this.setState({
      matrizID: evt.value
    });
  }  
  updateInputOperacao(evt) {    
    this.setState({
      tipoDocumentoID: evt.value
    });
  }

  updateInputdataEmissao1(evt) {
    var d = new Date(evt);
    var month = '' + (d.getMonth() + 1);
    var day = '' + d.getDate();
    var year = d.getFullYear();
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    var dt = [year, month, day].join('-');    
    this.setState({
      dataEmissao1: dt
    });
  }
  updateInputdataEmissao2(evt) {
    var d = new Date(evt);
    var month = '' + (d.getMonth() + 1);
    var day = '' + d.getDate();
    var year = d.getFullYear();
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    var dt = [year, month, day].join('-');    
    this.setState({
      dataEmissao2: dt
    });
  }
  dataCompetencia1(evt) {
    var d = new Date(evt);
    var month = '' + (d.getMonth() + 1);
    var day = '' + d.getDate();
    var year = d.getFullYear();
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    var dt = [year, month, day].join('-');    
    this.setState({
      dataCompetencia1: dt
    });
  }
  dataCompetencia2(evt) {
    var d = new Date(evt);
    var month = '' + (d.getMonth() + 1);
    var day = '' + d.getDate();
    var year = d.getFullYear();
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    var dt = [year, month, day].join('-');    
    this.setState({
      dataCompetencia2: dt
    });
  }
  dataVencimento1(evt) {
    var d = new Date(evt);
    var month = '' + (d.getMonth() + 1);
    var day = '' + d.getDate();
    var year = d.getFullYear();
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    var dt = [year, month, day].join('-');    
    this.setState({
      dataVencimento1: dt
    });
  }
  dataVencimento2(evt) {
    var d = new Date(evt);
    var month = '' + (d.getMonth() + 1);
    var day = '' + d.getDate();
    var year = d.getFullYear();
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    var dt = [year, month, day].join('-');    
    this.setState({
      dataVencimento2: dt
    });
  }
  dataBaixa1(evt) {
    var d = new Date(evt);
    var month = '' + (d.getMonth() + 1);
    var day = '' + d.getDate();
    var year = d.getFullYear();
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    var dt = [year, month, day].join('-');    
    this.setState({
      dataBaixa1: dt
    });
  }
  dataBaixa2(evt) {
    var d = new Date(evt);
    var month = '' + (d.getMonth() + 1);
    var day = '' + d.getDate();
    var year = d.getFullYear();
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    var dt = [year, month, day].join('-');    
    this.setState({
      dataBaixa2: dt
    });
  }

  PostSelect(event){    

    var filtro = {
      contaCorrenteID: this.state.contaCorrenteID == undefined ? "" : this.state.contaCorrenteID,
      contaDespesaID:  this.state.contaDespesaID == undefined ? "" : this.state.contaDespesaID,
      filialID:  this.state.filialID == undefined ? "" : this.state.filialID,
      fornecedoresID:  this.state.fornecedoresID == undefined ? "" : this.state.fornecedoresID,
      matrizID:  this.state.matrizID == undefined ? "" : this.state.matrizID,
      tipoDocumentoID:  this.state.tipoDocumentoID == undefined ? "" : this.state.tipoDocumentoID,
      dataEmissao1:  this.state.dataEmissao1 == undefined ? "" : this.state.dataEmissao1,
      dataEmissao2:  this.state.dataEmissao2 == undefined ? "" : this.state.dataEmissao2,
      dataCompetencia1:  this.state.dataCompetencia1 == undefined ? "" : this.state.dataCompetencia1,
      dataCompetencia2:  this.state.dataCompetencia2 == undefined ? "" : this.state.dataCompetencia2,
      dataVencimento1:  this.state.dataVencimento1 == undefined ? "" : this.state.dataVencimento1,
      dataVencimento2:  this.state.dataVencimento2 == undefined ? "" : this.state.dataVencimento2,
      dataBaixa1:  this.state.dataBaixa1 == undefined ? "" : this.state.dataBaixa1,
      dataBaixa2:  this.state.dataBaixa2 == undefined ? "" : this.state.dataBaixa2
    }
    
    event.preventDefault();
    this.props.postSelect(filtro);

    setTimeout(      
        this.setState({
          movimentacoes: JSON.parse(localStorage.getItem('movimentacoes'))
        })
       , 8000
    );    
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({postSelect, clickChangeLang}, dispatch);
}
const mapStateToProps = store => ({  
  languageResources: store.clickState.languageResources
});

export default connect(mapStateToProps, mapDispatchToProps)(ConsultarMovimentacao);

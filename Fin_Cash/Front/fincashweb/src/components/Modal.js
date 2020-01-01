import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, Row, Col } from "reactstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { Tema1_2_Modal } from "../styles/css/Geral";
class ModalCustom extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Tema1_2_Modal>        
        <div className="TESTE">          
          <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>                            
            </Modal.Header>
            <Modal.Body>              
              <p>
              Título incluído com sucesso
              </p>
            </Modal.Body>
            {/* <Modal.Footer> */}
            {/* <Button onClick={this.props.onHide}>Close</Button> */}
            {/* </Modal.Footer> */}
          </Modal>          
        </div>
        </Tema1_2_Modal>
      
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}
export default connect(null, mapDispatchToProps)(ModalCustom);

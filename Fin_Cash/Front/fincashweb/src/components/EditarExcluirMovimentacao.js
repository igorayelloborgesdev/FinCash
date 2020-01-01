import React, {Component}  from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Container, Row, Col} from 'reactstrap'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class EditarExcluirMovimentacao extends Component{

    constructor(props){
        super(props);    
    }
    
    render(){
        return(
            <div>      
                <h1>Editar/ Excluir Movimentação</h1>
            </div>  
        )
      }        

}
    
function mapDispatchToProps(dispatch){
    return bindActionCreators({}, dispatch);
}
export default connect(null, mapDispatchToProps)(EditarExcluirMovimentacao);
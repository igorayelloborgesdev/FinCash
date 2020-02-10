var express = require('express');
var app = express();
const Movimentacoes = require('./Business/MovimentacoesBusiness');
let movimentacoes = new Movimentacoes();

var bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/', async function (req, res) {            
    movimentacoes.CreateMovimentacoes().then( result =>{        
        res.send(result);        
    });      
});
app.post('/', async function (req, res) { 
    console.log("-------------------------------------------------------");
    console.log(req.body);
    // console.log(req.body);
    // res.send(req.body); 

    var filtro = {
        id: '',
        contaCorrenteID: req.body.contaCorrenteID,
        contaDespesaID: req.body.contaDespesaID,
        filialID: req.body.filialID,
        fornecedoresID: req.body.fornecedoresID,
        matrizID: req.body.matrizID,
        tipoDocumentoID: req.body.tipoDocumentoID,
        numMovimetacao: '',
        numNotaFiscal: '',
        numDocumento: '',
        valorOriginal: '',
        valorBaixado: '',
        valorContrapartida: '',
        valorCaixaCorrente: '',
        valorReceitaDespesa: '',
        idUsuario: '',
        dataEmissao1: req.body.dataEmissao1,
        dataEmissao2: req.body.dataEmissao2,
        dataCompetencia1: req.body.dataCompetencia1,
        dataCompetencia2: req.body.dataCompetencia2,
        dataVencimento1: req.body.dataVencimento1,
        dataVencimento2: req.body.dataVencimento2,
        dataBaixa1: req.body.dataBaixa1,
        dataBaixa2: req.body.dataBaixa2
    }      
    movimentacoes.SelectMovimentacoes(filtro).then( result =>{        
        res.send(result);        
    });      
});
app.listen(8080, function () {
    console.log('Example app listening on port 8080');
})
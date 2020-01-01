var express = require('express');
var app = express();
const Operacao = require('./Business/OperacaoBusiness');
let operacao = new Operacao();

app.get('/', async function (req, res) {            
    operacao.GetOperacao().then( result =>{        
        res.send(result);        
    });      
});
app.listen(8080, function () {
    console.log('Example app listening on port 8080');
})
var express = require('express');
var app = express();
const Operacao = require('./Business/OperacaoBusiness');
let operacao = new Operacao();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/', async function (req, res) {            
    operacao.GetOperacao().then( result =>{        
        res.send(result);        
    });      
});
app.listen(8080, function () {
    console.log('Example app listening on port 8080');
})
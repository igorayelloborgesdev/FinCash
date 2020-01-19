var express = require('express');
var app = express();
const ContaDespesa = require('./Business/ContaDespesaBusiness');
let contadespesa = new ContaDespesa();
const ContaCorrente = require('./Business/ContaCorrenteBusiness');
let contacorrente = new ContaCorrente();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/ContaCorrente', async function (req, res) {            
    contacorrente.GetContaCorrente().then( result =>{        
        res.send(result);        
    });      
});
app.get('/ContaDespesa', async function (req, res) {            
    contadespesa.GetContaDespesa().then( result =>{        
        res.send(result);        
    });      
});
app.listen(8080, function () {
    console.log('Example app listening on port 8080');
})
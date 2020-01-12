var express = require('express');
var app = express();
const Movimentacoes = require('./Business/MovimentacoesBusiness');
let movimentacoes = new Movimentacoes();
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
app.listen(8080, function () {
    console.log('Example app listening on port 8080');
})
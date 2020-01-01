var express = require('express');
var app = express();
const Movimentacoes = require('./Business/MovimentacoesBusiness');
let movimentacoes = new Movimentacoes();

app.get('/', async function (req, res) {            
    movimentacoes.CreateMovimentacoes().then( result =>{        
        res.send(result);        
    });      
});
app.listen(8080, function () {
    console.log('Example app listening on port 8080');
})
var express = require('express');
var app = express();
const Fornecedor = require('./Business/FornecedorBusiness');
let fornecedor = new Fornecedor();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/', async function (req, res) {            
    fornecedor.GetFornecedor().then( result =>{        
        res.send(result);        
    });      
});
app.listen(8080, function () {
    console.log('Example app listening on port 8080');
})
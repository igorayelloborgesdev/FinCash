var express = require('express');
var app = express();
const Fornecedor = require('./Business/FornecedorBusiness');
let fornecedor = new Fornecedor();

app.get('/', async function (req, res) {            
    fornecedor.GetFornecedor().then( result =>{        
        res.send(result);        
    });      
});
app.listen(8080, function () {
    console.log('Example app listening on port 8080');
})
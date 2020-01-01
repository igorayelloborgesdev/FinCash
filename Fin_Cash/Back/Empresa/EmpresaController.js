'use strict';

var express = require('express');
var app = express();
const Matriz = require('./Business/MatrizBusiness');
let matriz = new Matriz();
const Filial = require('./Business/FilialBusiness');
let filial = new Filial();
const PORT = 8080;
app.get('/empresa', async function (req, res) {            
    matriz.GetAllMatriz().then( result =>{        
        res.send(result);        
    });      
});
app.get('/filial', async function (req, res) {            
    filial.GetAllFilial().then( result =>{                
        res.send(result);        
    });      
});
app.listen(PORT);
console.log(`Running on http://${PORT}`);
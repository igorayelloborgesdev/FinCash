var express = require('express');
var app = express();
var cors = require('cors')
const Usuario = require('./Business/UsuarioBusiness');
let usuario = new Usuario();
const Autenticacao = require('./Business/AutenticacaoBusiness');
let autenticacao = new Autenticacao();
var bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
})); 

app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/login', async function (req, res) {     
    var userLogin = {
        user: req.body.user,
        pass: req.body.pass
    }
    usuario.GetUsuario(userLogin).then( result =>{          
        res.send(result);        
    });      
});
app.post('/logout', async function (req, res) {     
    var userLogin = {
        id: req.body.id,        
    }
    usuario.GetLogout(userLogin).then( result =>{          
        res.send(result);        
    });      
});
app.put('/user', async function (req, res) {      
    var userPerfil = {
        token: req.header('token'),        
        id_usuario: req.body.id_usuario, 
        id_idioma: req.body.id_idioma, 
        id_perfil: req.body.id_perfil,            
    }    
    usuario.SetUsuarioPerfil(userPerfil).then( result =>{          
        res.send(result);        
    });      
});
app.post('/validarToken', async function (req, res) {            
    var userToken = {
        id_usuario: req.body.id_usuario,
        token: req.header('token')
    }       
    autenticacao.GetValidarAutenticacao(userToken).then( result =>{          
        res.send(result);        
    });      
});
app.listen(8080, function () {
    console.log('Example app listening on port 8080');
})
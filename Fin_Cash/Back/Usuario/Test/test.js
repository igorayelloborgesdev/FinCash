var assert = require('assert');
const Usuario = require('../Business/UsuarioBusiness');
let usuario = new Usuario();
const Autenticacao = require('../Business/AutenticacaoBusiness');
let autenticacao = new Autenticacao();
describe('Usuario', function() {
    xit('Deve trazer a autenticação', function() {
        var userLogin = {
            user: 'romario',
            pass: '6b76b5b54567ec0008287d11a2e9e22a'
        }
        usuario.GetUsuario(userLogin).then( result =>{
            
            console.log(result);
            
            assert(result);
        });                         
    });
    xit('Não deve trazer a autenticação com usuário inválido', function() {        
        var userLogin2 = {
            user: 'taffarel',
            pass: '6b76b5b54567ec0008287d11a2e9e22a'
        }
        usuario.GetUsuario(userLogin2).then( result =>{
            
            console.log(result);
            
            assert(result);
        });                         
    });
    xit('Não deve trazer a autenticação com senha inválida', function() {        
        var userLogin3 = {
            user: 'romario',
            pass: '6b76b5b54567ec00'
        }
        usuario.GetUsuario(userLogin3).then( result =>{
            
            console.log(result);
            
            assert(result);
        });
    });
    xit('Deve cancelar o token', function() {        
        var userLogin3 = {
            id: 1            
        }
        usuario.GetLogout(userLogin3).then( result =>{                        
            assert(result);
        });                         
    });
    xit('Deve alterar o perfil', function() {        
        var userPerfil = {
            id_usuario: 1, 
            id_idioma: 1, 
            id_perfil: 1,
            token: ''
        }
        var userLogin = {
            user: 'romario',
            pass: '6b76b5b54567ec0008287d11a2e9e22a'
        }
        usuario.GetUsuario(userLogin).then( result =>{ 
            userPerfil.token = result.token;                        
            usuario.SetUsuarioPerfil(userPerfil).then( result =>{                   
                assert(result);
            });
        }); 
                                 
    });
    xit('Deve validar o token', function() {        
        var userLogin = {
            user: 'romario',
            pass: '6b76b5b54567ec0008287d11a2e9e22a'
        }
        usuario.GetUsuario(userLogin).then( result =>{            
            autenticacao.GetValidarAutenticacao(result.token).then( result2 =>{            
                assert(result2);
                usuario.GetLogout(userLogin).then( result3 =>{                                
                    assert(result3);    
                }); 
            });             
        });                         
    });
});
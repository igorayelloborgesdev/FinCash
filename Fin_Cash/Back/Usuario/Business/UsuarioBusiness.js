const Usuario = require('../Data/UsuarioData');
let usuario = new Usuario();
const Autenticacao = require('../Data/AutenticacaoData');
let autenticacao = new Autenticacao();
module.exports = class Usuario {
    constructor() 
    {};
    async GetUsuario(userLogin)
    {
        try{
            return new Promise ((resolve, reject)=>{             
                usuario.GetUsuario(userLogin).then( result =>{ 
                    if(result.user == undefined || result.pass == undefined)
                    {
                        //Not found
                        resolve({
                            code: 406 
                        });
                    }                    
                    else if (result.pass != userLogin.pass)
                    {                        
                        //Incorret user or pass
                        resolve({
                            code: 406 
                        });
                    }
                    else
                    {
                        //Correct
                        //Generate token                        
                        autenticacao.GetAutenticacao(result.id).then( result2 =>{ 
                            usuario.SetUsuarioToken(result.id, result2).then( result3 =>{                             
                                resolve({
                                    id: result.id,
                                    name: result.name,
                                    // user: result.user,
                                    // pass: result.pass,
                                    token: result2
                                });
                            });                                                        
                        });
                        

                    }                    
                });         
            });
        } catch (err){                     
            return err.message;
        }                                
    }
    async GetLogout(userLogin)
    {
        try{
            return new Promise ((resolve, reject)=>{             
                autenticacao.GetLogout(userLogin.id).then( result =>{ 
                    usuario.SetUsuarioToken(userLogin.id, null).then( result2 =>{                             
                        resolve({
                            code: 200 
                        });
                    }); 
                    
                });         
            });
        } catch (err){                     
            return err.message;
        }                                
    }
    async SetUsuarioPerfil(userPerfil)
    {
        try{
            return new Promise ((resolve, reject)=>{                                    
                autenticacao.GetValidarAutenticacao(userPerfil).then( result =>{                       
                    if(result.code == 401)
                    {
                        resolve(result);
                    }
                    else
                    {
                        usuario.SetUsuarioPerfil(userPerfil).then( result =>{                             
                            resolve(result);                           
                        });     
                    }                      
                });                    
            });
        } catch (err){                     
            return err.message;
        }                                
    }
}
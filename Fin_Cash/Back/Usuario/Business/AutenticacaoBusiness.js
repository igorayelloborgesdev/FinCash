const Autenticacao = require('../Data/AutenticacaoData');
let autenticacao = new Autenticacao();
module.exports = class Autenticacao {
    constructor() 
    {};   
    async GetValidarAutenticacao(userToken)
    {
        try{
            return new Promise ((resolve, reject)=>{                     
                autenticacao.GetValidarAutenticacao(userToken).then( result =>{                                      
                    resolve(result);                           
                });         
            });
        } catch (err){
            return err.message;
        }
    }    
}
const Operacao = require('../Data/OperacaoData');
let operacao = new Operacao();
module.exports = class Operacao {
    constructor() 
    {};
    async GetOperacao()
    {
        try{
            return new Promise ((resolve, reject)=>{             
                operacao.GetOperacao().then( result =>{                            
                    resolve(result);
                });         
            });
        } catch (err){
            resolve(err.message);            
        }                                
    }
}
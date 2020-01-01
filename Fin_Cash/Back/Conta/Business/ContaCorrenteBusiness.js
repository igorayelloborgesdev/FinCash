const ContaCorrente = require('../Data/ContaCorrenteData');
let contacorrente = new ContaCorrente();
module.exports = class ContaCorrente {
    constructor() 
    {};
    async GetContaCorrente()
    {
        try{
            return new Promise ((resolve, reject)=>{             
                contacorrente.GetContaCorrente().then( result =>{                            
                    resolve(result);
                });         
            });
        } catch (err){
            resolve(err.message);            
        }                                
    }
}
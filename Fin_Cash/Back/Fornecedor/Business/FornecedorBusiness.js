const Fornecedor = require('../Data/FornecedorData');
let fornecedor = new Fornecedor();
module.exports = class Fornecedor {
    constructor() 
    {};
    async GetFornecedor()
    {
        try{
            return new Promise ((resolve, reject)=>{             
                fornecedor.GetFornecedor().then( result =>{                            
                    resolve(result);
                });         
            });
        } catch (err){
            resolve(err.message);            
        }                                
    }
}
const ContaDespesa = require('../Data/ContaDespesaData');
let contadespesa = new ContaDespesa();
module.exports = class ContaDespesa {
    constructor() 
    {};
    async GetContaDespesa()
    {
        try{
            return new Promise ((resolve, reject)=>{             
                contadespesa.GetContaDespesa().then( result =>{                            
                    resolve(result);
                });         
            });
        } catch (err){
            resolve(err.message);            
        }                                
    }
}
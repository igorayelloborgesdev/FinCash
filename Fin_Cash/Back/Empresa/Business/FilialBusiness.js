const Filial = require('../Data/FilialData');
let filial = new Filial();
module.exports = class Filial {
    constructor() 
    {};
    async GetAllFilial()
    {     
        try{
            return new Promise ((resolve, reject)=>{             
                filial.GetAllFilial().then( result =>{                       
                    resolve(result);
                });         
            });
        } catch (err){
            resolve(err.message);            
        }           
        
    }
}
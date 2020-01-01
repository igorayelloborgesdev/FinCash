
const Matriz = require('../Data/MatrizData');
let matriz = new Matriz();
module.exports = class Matriz {
    constructor() 
    {};
    async GetAllMatriz()
    {     
        try{
            return new Promise ((resolve, reject)=>{             
                matriz.GetAllMatriz().then( result =>{                            
                    resolve(result);
                });         
            });
        } catch (err){
            resolve(err.message);            
        }           
        
    }
}
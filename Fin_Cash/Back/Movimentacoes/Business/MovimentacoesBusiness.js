const Movimentacoes = require('../Data/MovimentacoesData');
let movimentacoes = new Movimentacoes();
module.exports = class Movimentacoes {
    constructor() 
    {};
    async CreateMovimentacoes(mov)
    {
        try{
            return new Promise ((resolve, reject)=>{             
                movimentacoes.CreateMovimentacoes(mov).then( result =>{                            
                    resolve(result);
                });         
            });
        } catch (err){
            resolve(err.message);            
        }                                
    }
    async DeleteMovimentacoes(id)
    {
        try{
            return new Promise ((resolve, reject)=>{             
                movimentacoes.DeleteMovimentacoes(id).then( result =>{  
                    resolve(result);
                });         
            });
        } catch (err){
            resolve(err.message);            
        }                                
    }
    async UpdateMovimentacoes(mov, id)
    {
        try{
            return new Promise ((resolve, reject)=>{             
                movimentacoes.UpdateMovimentacoes(mov, id).then( result =>{  
                    resolve(result);
                });         
            });
        } catch (err){
            resolve(err.message);            
        }                                
    }
    async SelectMovimentacoes(filtro)
    {
        try{
            return new Promise ((resolve, reject)=>{             
                movimentacoes.SelectMovimentacoes(filtro).then( result =>{  
                    resolve(result);
                });         
            });
        } catch (err){
            resolve(err.message);            
        }                                
    }
}
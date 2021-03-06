module.exports = class Operacao {
    constructor() 
    {};
    async GetOperacao()
    {   
        return new Promise ((resolve, reject)=>{             
            let retorno = [];    	
            const sqlite3 = require('sqlite3').verbose();            
            var path = require('path');                           
            let db = new sqlite3.Database(path.join(__dirname, '..//DATABASE', 'Operacoes.db'), (err) => {
                if (err) {
                    console.error(err.message);
                } else {                    
                    db.serialize(function(){
                        let sql = `SELECT * FROM tipoDocumento`;
                        db.all(sql, [], (err, rows) => {
                            if (err) {
                            throw err;
                            }
                            rows.forEach((row) => {
                                retorno.push(row);            
                            });                        
                        }); 
                    }); 

                }
            });                                      
            db.close((err) => {
                if (err) {
                    return console.error(err.message);
                }                        
                console.log('Close the database connection.');                            
                resolve(retorno);            
            });   
        }); 
    }
}
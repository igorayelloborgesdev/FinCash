require("dotenv-safe");
var jwt = require('jsonwebtoken');

module.exports = class Autenticacao {    
    constructor() 
    {
        this.expirationTime = (20 * 60000).toString() + 'ms';
        this.codeKey = 'teste';
    };    
    async GetAutenticacao(userId)
    {   
        return new Promise ((resolve, reject)=>{             
            try
            {                
                var token = jwt.sign({ id: userId }, this.codeKey, {expiresIn: this.expirationTime});
                resolve(token);
            }
            catch(err) {                                
                resolve({
                    token: null                    
                });
              }
            
        }); 
    }
    async GetLogout(userId)
    {   
        return new Promise ((resolve, reject)=>{             
            try
            {
                var token = jwt.sign({ id: userId }, this.codeKey, {expiresIn: '1ms'});                
                var decoded = jwt.verify(token, this.codeKey);
                resolve({
                    token: null                    
                });
            }
            catch(err) {                                
                resolve({
                    token: null                    
                });
              }
            
        }); 
    }
    async GetValidarAutenticacao(userToken)
    {          
        return new Promise ((resolve, reject)=>{             
            try
            {                
                this.GetUsuarioToken(userToken.id_usuario).then( result =>{ 
                    try
                    {
                        if(result == userToken.token)
                        {                        
                            var decoded = jwt.verify(userToken.token, this.codeKey);                           
                            resolve({
                                code: 200                    
                            });                      
                        }
                        else
                        {                        
                            resolve({
                                code: 401                    
                            });
                        }
                    }
                    catch(err) {                   
                        resolve({
                            code: 401                    
                        });
                    }
                                        
                });
            }
            catch(err) {                   
                resolve({
                    code: 401                    
                });
              }            
        }); 
    }
    async GetUsuarioToken(id)
    {   
        return new Promise ((resolve, reject)=>{                             
            let retorno = '';    	
            const sqlite3 = require('sqlite3').verbose();            
            var path = require('path');                           
            let db = new sqlite3.Database(path.join(__dirname, '..//DATABASE', 'Usuario.db'), (err) => {
                if (err) {                    
                    console.error(err.message);
                } else {                    
                    db.serialize(function(){
                        let sql = `SELECT token FROM usuario WHERE id =` + id.toString();
                        db.all(sql, [], (err, rows) => {
                            if (err) {
                                throw err;
                            }
                            rows.forEach((row) => {
                                retorno = row.token;            
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
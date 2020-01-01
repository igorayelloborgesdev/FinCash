require("dotenv-safe");
var jwt = require('jsonwebtoken');

module.exports = class Usuario {    
    constructor() 
    {};
    async GetUsuario(userLogin)
    {   
        return new Promise ((resolve, reject)=>{                             
            let retorno = {};    	
            const sqlite3 = require('sqlite3').verbose();            
            var path = require('path');                           
            let db = new sqlite3.Database(path.join(__dirname, '..//DATABASE', 'Usuario.db'), (err) => {
                if (err) {
                    console.error(err.message);
                } else {                    
                    db.serialize(function(){
                        let sql = `SELECT id, name, user, pass FROM usuario WHERE user ="` + userLogin.user + `"`;
                        db.all(sql, [], (err, rows) => {
                            if (err) {
                            throw err;
                            }
                            rows.forEach((row) => {
                                retorno = {
                                    id: row.id,
                                    name: row.name,
                                    user: row.user,
                                    pass: row.pass                                    
                                };            
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

    async SetUsuarioPerfil(userPerfil)
    {   
        return new Promise ((resolve, reject)=>{                             
            let retorno = {};    	
            const sqlite3 = require('sqlite3').verbose();            
            var path = require('path');                           
            let db = new sqlite3.Database(path.join(__dirname, '..//DATABASE', 'Usuario.db'), (err) => {
                if (err) {
                    console.error(err.message);
                } else {                    
                    db.serialize(function(){
                        let data = [userPerfil.id_idioma, userPerfil.id_perfil, userPerfil.id_usuario];
                        db.run("UPDATE usuarioPerfil SET id_idioma=?, id_perfil=? WHERE id_usuario=?",data,function(err,rows){
                            if (err) {
                                return console.log(err.message);
                            }
                            let sql = `SELECT id_usuario, id_idioma, id_perfil FROM usuarioPerfil WHERE id_usuario=` + userPerfil.id_usuario;
                            db.all(sql, [], (err, rows) => {
                                if (err) {
                                    throw err;
                                }
                                rows.forEach((row) => {
                                    resolve(
                                        {
                                            id_idioma: row.id_idioma,
                                            id_perfil: row.id_perfil
                                        }
                                    );
                                });
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

    async SetUsuarioToken(id, token)
    {   
        return new Promise ((resolve, reject)=>{                             
            let retorno = {};    	
            const sqlite3 = require('sqlite3').verbose();            
            var path = require('path');                           
            let db = new sqlite3.Database(path.join(__dirname, '..//DATABASE', 'Usuario.db'), (err) => {
                if (err) {
                    console.error(err.message);
                } else {                    
                    let data = [token, id];
                    db.run("UPDATE usuario SET token=? WHERE id=?",data,function(err,rows){
                        if (err) {
                            return console.log(err.message);
                        }
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
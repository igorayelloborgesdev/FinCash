const fs = require('fs');
// let matrizFile = '../../../Support/Data/Matriz.json';
let matrizFile = 'D://IGOR//IgorAyelloBorges//PROJETOS//Fin_Ca$h//Fin_Cash//Support//Data//Matriz.json'
let matriz = [];
let GerarDados = fs.readFile(matrizFile, (err, data) => {    
    matriz = JSON.parse(data);      
    const sqlite3 = require('sqlite3').verbose();

    let db = new sqlite3.Database('./Matriz.db', (err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log('Connected to the Matriz database.');
        }
    });
    
    db.run('CREATE TABLE matriz (id INTEGER PRIMARY KEY UNIQUE, name TEXT NOT NULL)',function(err) {
        if (err) {
          return console.log(err.message);
        }
        else
        {
            for(var i = 0; i < matriz.length; i++)
            {
                var query = 'INSERT INTO matriz (id, name) VALUES(' + matriz[i].id + ',"' + matriz[i].name +'")';
                db.run(query,function(err) {
                    if (err) {
                    return console.log(err.message);
                    }        
                    console.log(`A row has been inserted with rowid ${this.lastID}`);
                });
                let sql = `SELECT * FROM matriz`;
                db.all(sql, [], (err, rows) => {
                    if (err) {
                    throw err;
                    }
                    rows.forEach((row) => {
                    console.log(row);
                    });
                });
            }
        }        
        console.log(`A row has been inserted with rowid ${this.lastID}`);
    });      
    
    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Close the database connection.');
    });
    
});

module.exports = GerarDados
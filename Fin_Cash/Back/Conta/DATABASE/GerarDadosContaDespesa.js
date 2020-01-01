const fs = require('fs');
let matrizFile = 'D://IGOR//IgorAyelloBorges//PROJETOS//Fin_Ca$h//Fin_Cash//Support//Data//ContaDespesa.json'
let matriz = [];
let GerarDados = fs.readFile(matrizFile, (err, data) => {    
    matriz = JSON.parse(data);      
    const sqlite3 = require('sqlite3').verbose();

    let db = new sqlite3.Database('./Conta.db', (err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log('Connected to the Conta database.');
        }
    });
    
    db.run('CREATE TABLE contaDespesa (id INTEGER PRIMARY KEY UNIQUE, name TEXT NOT NULL)',function(err) {
        if (err) {
          return console.log(err.message);
        }
        else
        {
            for(var i = 0; i < matriz.length; i++)
            {
                var query = 'INSERT INTO contaDespesa (id, name) VALUES(' + matriz[i].id + ',"' + matriz[i].name +'")';
                db.run(query,function(err) {
                    if (err) {
                    return console.log(err.message);
                    }        
                    console.log(`A row has been inserted with rowid ${this.lastID}`);
                });
                let sql = `SELECT * FROM contaDespesa`;
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
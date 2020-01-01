const fs = require('fs');
let matrizFile = 'D://IGOR//IgorAyelloBorges//PROJETOS//Fin_Ca$h//Fin_Cash//Support//Data//MovimentacoesFinanceiras.json'
let matriz = [];
let GerarDados = fs.readFile(matrizFile, (err, data) => {    
    matriz = JSON.parse(data);      
    const sqlite3 = require('sqlite3').verbose();

    let db = new sqlite3.Database('./Movimentacoes.db', (err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log('Connected to the Movimentacoes database.');
        }
    });    
    
    let sql = `SELECT * FROM movimentacoes`;
    db.all(sql, [], (err, rows) => {
        if (err) {
        throw err;
        }
        rows.forEach((row) => {
        console.log(row);
        });
    });

    db.close((err) => {
        if (err) {            
            return console.error(err.message);
        }
        console.log('Close the database connection.');
    });
    
});

module.exports = GerarDados
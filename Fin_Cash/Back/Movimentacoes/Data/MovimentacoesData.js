module.exports = class Movimentacoes {
    constructor() 
    {};
    async CreateMovimentacoes(mov)
    {   
        return new Promise ((resolve, reject)=>{ 
            let retorno = '';                        
            const sqlite3 = require('sqlite3').verbose();            
            var path = require('path');      

            let db = new sqlite3.Database(path.join(__dirname, '..//DATABASE', 'Movimentacoes.db'), (err) => {
                if (err) {
                    console.error(err.message);
                } else {
                    console.log('Connected to the Movimentacoes database.');
                }
            });            
            var query = 'INSERT INTO movimentacoes (contaCorrenteID, contaDespesaID, filialID, fornecedoresID, matrizID, tipoDocumentoID, numMovimetacao, numNotaFiscal, numDocumento, dataEmissao, dataCompetencia, dataVencimento, dataBaixa, valorOriginal, valorBaixado, valorContrapartida, valorCaixaCorrente, valorReceitaDespesa, idUsuario) VALUES(' 
            + 
            mov.contaCorrenteID + "," 
            +                
            mov.contaDespesaID + ","
            +
            mov.filialID + ","
            +
            mov.fornecedoresID + ","
            +
            mov.matrizID + ","
            +
            mov.tipoDocumentoID + ","
            + 
            "'" + mov.numMovimetacao + "',"
            +
            "'" + mov.numNotaFiscal + "',"
            +
            "'" + mov.numDocumento + "',"
            +
            "'" + mov.dataEmissao + "',"
            +
            "'" + mov.dataCompetencia + "',"
            +
            "'" + mov.dataVencimento  + "',"
            +
            "'" + mov.dataBaixa  + "',"
            +
            mov.valorOriginal + ","
            +
            mov.valorBaixado + ","
            +
            mov.valorContrapartida + ","
            +
            mov.valorCaixaCorrente + ","
            +
            mov.valorReceitaDespesa + ","
            +
            mov.idUsuario
            +
            ')';                                 
            db.run(query, function(err) {
                if (err) {
                return console.log(err.message);
                }        
                console.log(`A row has been inserted with rowid ${this.lastID}`);
                retorno = this.lastID;
            });
                     
            
            // let retorno = [];
            // let sql = `SELECT * FROM movimentacoes WHERE ID = (SELECT MAX(ID)  FROM movimentacoes)`;
            // db.all(sql, [], (err, rows) => {
            //     if (err) {
            //     throw err;
            //     }
            //     rows.forEach((row) => {
            //         retorno.push(row);
            //     });
            // });
           

            db.close((err) => {
                if (err) {            
                    return console.error(err.message);
                }
                console.log('Close the database connection.');
                resolve(retorno); 
            });
        }); 
    }
    async DeleteMovimentacoes(id)
    {         
        return new Promise ((resolve, reject)=>{
            let retorno = '';                                  
            const sqlite3 = require('sqlite3').verbose();            
            var path = require('path');      

            let db = new sqlite3.Database(path.join(__dirname, '..//DATABASE', 'Movimentacoes.db'), (err) => {
                if (err) {
                    console.error(err.message);
                } else {
                    console.log('Connected to the Movimentacoes database.');
                }
            });
            
            var query = 'DELETE FROM movimentacoes WHERE id=' + id;                                 
            db.run(query, function(err) {
                if (err) {
                return console.log(err.message);
                }        
                console.log(`Row(s) deleted ${this.changes}`);
                retorno = this.changes;
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
    async UpdateMovimentacoes(mov, id)
    {   
        return new Promise ((resolve, reject)=>{ 
            let retorno = '';                        
            const sqlite3 = require('sqlite3').verbose();            
            var path = require('path');      

            let db = new sqlite3.Database(path.join(__dirname, '..//DATABASE', 'Movimentacoes.db'), (err) => {
                if (err) {
                    console.error(err.message);
                } else {
                    console.log('Connected to the Movimentacoes database.');
                }
            });            
            var query = 'UPDATE movimentacoes SET contaCorrenteID=' + mov.contaCorrenteID 
            + ', contaDespesaID=' + mov.contaDespesaID 
            + ', filialID=' + mov.filialID 
            + ', fornecedoresID=' + mov.fornecedoresID 
            + ', matrizID=' + mov.matrizID 
            + ', tipoDocumentoID=' + mov.tipoDocumentoID 
            + ', numMovimetacao=' + "'" + mov.numMovimetacao + "'"
            + ', numNotaFiscal=' + "'" + mov.numNotaFiscal + "'"  
            + ', numDocumento=' + "'" + mov.numDocumento + "'"
            + ', dataEmissao=' + "'" + mov.dataEmissao + "'" 
            + ', dataCompetencia=' + "'" + mov.dataCompetencia + "'" 
            + ', dataVencimento=' + "'" + mov.dataVencimento + "'" 
            + ', dataBaixa=' + "'" + mov.dataBaixa  + "'" 
            + ', valorOriginal=' + mov.valorOriginal 
            + ', valorBaixado=' + mov.valorBaixado 
            + ', valorContrapartida=' + mov.valorContrapartida 
            + ', valorCaixaCorrente=' + mov.valorCaixaCorrente  
            + ', valorReceitaDespesa=' + mov.valorReceitaDespesa  
            + ', idUsuario=' + mov.idUsuario
            + ' WHERE id= ' + id; 
   
            db.run(query, function(err) {
                if (err) {
                return console.log(err.message);
                }        
                console.log(`A row has been updated with rowid ${this.changes}`);
                retorno = this.changes;
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
    async SelectMovimentacoes(filtro)
    {   
        return new Promise ((resolve, reject)=>{ 
            let retorno = [];                        
            const sqlite3 = require('sqlite3').verbose();            
            var path = require('path');      
            let db = new sqlite3.Database(path.join(__dirname, '..//DATABASE', 'Movimentacoes.db'), (err) => {
                if (err) {
                    console.error(err.message);
                } else {
                    console.log('Connected to the Movimentacoes database.');
                }
            });                 
            var filtroWhere = '';
            var filtroWhereArray = [];
            if(filtro.id != 0)
            {
                filtroWhereArray.push(' id=' + filtro.id);
            }
            if(filtro.contaCorrenteID != 0)
            {
                filtroWhereArray.push(' contaCorrenteID=' + filtro.contaCorrenteID);
            }
            if(filtro.contaDespesaID != 0)
            {
                filtroWhereArray.push(' contaDespesaID=' + filtro.contaDespesaID);
            }
            if(filtro.filialID != 0)
            {
                filtroWhereArray.push(' filialID=' + filtro.filialID);
            }
            if(filtro.fornecedoresID != 0)
            {
                filtroWhereArray.push(' fornecedoresID=' + filtro.fornecedoresID);
            }
            if(filtro.matrizID != 0)
            {
                filtroWhereArray.push(' matrizID=' + filtro.matrizID);
            }
            if(filtro.tipoDocumentoID != 0)
            {
                filtroWhereArray.push(' tipoDocumentoID=' + filtro.tipoDocumentoID);
            }
            if(filtro.numMovimetacao != '')
            {
                filtroWhereArray.push(' numMovimetacao=' + filtro.numMovimetacao);
            }
            if(filtro.numNotaFiscal != '')
            {
                filtroWhereArray.push(' numNotaFiscal=' + filtro.numNotaFiscal);
            }
            if(filtro.numDocumento != '')
            {
                filtroWhereArray.push(' numDocumento=' + filtro.numDocumento);
            }
            if(filtro.valorOriginal > 0.0)
            {
                filtroWhereArray.push(' valorOriginal=' + filtro.valorOriginal);
            }
            if(filtro.valorBaixado > 0.0)
            {
                filtroWhereArray.push(' valorBaixado=' + filtro.valorBaixado);
            }
            if(filtro.valorContrapartida > 0.0)
            {
                filtroWhereArray.push(' valorContrapartida=' + filtro.valorContrapartida);
            }
            if(filtro.valorCaixaCorrente > 0.0)
            {
                filtroWhereArray.push(' valorCaixaCorrente=' + filtro.valorCaixaCorrente);
            }
            if(filtro.valorReceitaDespesa > 0.0)
            {
                filtroWhereArray.push(' valorReceitaDespesa=' + filtro.valorReceitaDespesa);
            }
            if(filtro.idUsuario != 0)
            {
                filtroWhereArray.push(' idUsuario=' + filtro.idUsuario);
            }
            if(filtro.dataEmissao1 != '')
            {
                filtroWhereArray.push(' dataEmissao BETWEEN "' + filtro.dataEmissao1 + '" AND "' + filtro.dataEmissao2 + '" ');
            }
            if(filtro.dataCompetencia1 != '')
            {
                filtroWhereArray.push(' dataCompetencia BETWEEN "' + filtro.dataCompetencia1 + '" AND "' + filtro.dataCompetencia2 + '" ');
            }
            if(filtro.dataVencimento1 != '')
            {
                filtroWhereArray.push(' dataVencimento BETWEEN "' + filtro.dataVencimento1 + '" AND "' + filtro.dataVencimento2 + '" ');
            }
            if(filtro.dataBaixa1 != '')
            {
                filtroWhereArray.push(' dataBaixa BETWEEN "' + filtro.dataBaixa1 + '" AND "' + filtro.dataBaixa2 + '" ');
            }
            if(filtroWhereArray.length > 0)
            {
                filtroWhere += ' WHERE ';
                for(var i = 0; i < filtroWhereArray.length; i++)
                {
                    filtroWhere += filtroWhereArray[i] + (i + 1 < filtroWhereArray.length ?  ' AND ' : '');
                }
            }            
            let sql = `SELECT * FROM movimentacoes` + filtroWhere;
            db.all(sql, [], (err, rows) => {
                if (err) {
                throw err;
                }
                rows.forEach((row) => {
                    retorno.push(row);
                });
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
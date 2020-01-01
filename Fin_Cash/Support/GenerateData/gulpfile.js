'use strict';

const fs = require('fs');

let MovFinanceiraDTO = require('./MovFinanceiraDTO');

function defaultTask(cb) {
  
    let contaCorrenteFile = '../Data/ContaCorrente.json';
    let contaDespesaFile = '../Data/ContaDespesa.json';
    let filialFile = '../Data/Filial.json';
    let fornecedoresFile = '../Data/Fornecedores.json';
    let matrizFile = '../Data/Matriz.json';
    let tipoDocumentoFile = '../Data/TipoDocumento.json';

    var contaCorrente = [];
    let contaDespesa = [];
    let filial = [];
    let fornecedores = [];
    let matriz = [];
    let tipoDocumento = [];

    let NumMovimetacao = 1000;
    let NumNotaFiscal = 1000;
    let NumDocumento = 1000;

    let ValorOriginal = 0.0;
    let ValorBaixado = 0.0;
    let ValorContrapartida = 0.0;
    let ValorCaixaCorrente = 0.0;
    let ValorReceitaDespesa = 0.0;

    let movFinanceiroFinal = [];

    fs.readFile(contaCorrenteFile, (err, data) => {
      if (err) throw err;
      contaCorrente = JSON.parse(data);      
      fs.readFile(contaDespesaFile, (err, data) => {
        if (err) throw err;
        contaDespesa = JSON.parse(data);        
        fs.readFile(filialFile, (err, data) => {
          if (err) throw err;
          filial = JSON.parse(data);          
          fs.readFile(fornecedoresFile, (err, data) => {
            if (err) throw err;
            fornecedores = JSON.parse(data);            
            fs.readFile(matrizFile, (err, data) => {
              if (err) throw err;
              matriz = JSON.parse(data);              
              fs.readFile(tipoDocumentoFile, (err, data) => {
                if (err) throw err;
                tipoDocumento = JSON.parse(data);                
                for(var  i = 0; i < 10000; i++)
                {
                  let objMovFinaceiro = MovFinanceiraDTO.movFinanceiraDTO(
                    (Math.floor(Math.random() * contaCorrente.length) + 1),
                    (Math.floor(Math.random() * contaCorrente.length) + 1),
                    (Math.floor(Math.random() * filial.length) + 1),
                    (Math.floor(Math.random() * fornecedores.length) + 1),
                    (Math.floor(Math.random() * matriz.length) + 1),
                    (Math.floor(Math.random() * tipoDocumento.length) + 1),
                    (NumMovimetacao++).toString(),
                    (NumNotaFiscal++).toString(),
                    (NumDocumento++).toString(),
                    new Date(new Date(2019, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2019, 0, 1).getTime())),
                    new Date(new Date(2019, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2019, 0, 1).getTime())),
                    new Date(new Date(2019, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2019, 0, 1).getTime())),
                    new Date(new Date(2019, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2019, 0, 1).getTime())),
                    Number((Math.random() * (10000.0 - 0.01) + 0.01).toFixed(2)),
                    Number((Math.random() * (10000.0 - 0.01) + 0.01).toFixed(2)),
                    Number((Math.random() * (10000.0 - 0.01) + 0.01).toFixed(2)),
                    Number((Math.random() * (10000.0 - 0.01) + 0.01).toFixed(2)),
                    Number((Math.random() * (10000.0 - 0.01) + 0.01).toFixed(2)),
                    (Math.floor(Math.random() * 3) + 1)
                  );
                  movFinanceiroFinal.push(objMovFinaceiro);                  
                }
                var json = JSON.stringify(movFinanceiroFinal);                                
                fs.writeFile ('MovimentacoesFinanceiras.json', json, function(err) {
                  if (err) throw err;
                  console.log('complete');
                  }
                );
              });
            });
          });
        });
      });      
    });
    cb();
  }
  
  exports.default = defaultTask
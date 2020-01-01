var assert = require('assert');
const Matriz = require('../Business/MatrizBusiness');
let matriz = new Matriz();
const Filial = require('../Business/FilialBusiness');
let filial = new Filial();
describe('Matriz', function() {
    xit('Deve trazer as matrizes', function() {
        matriz.GetAllMatriz().then( result =>{                 
            assert(result);
        });                         
    });
});
describe('Filial', function() {
    it('Deve trazer as filiais', function() {
        filial.GetAllFilial().then( result =>{                 
            assert(result);
        });                         
    });
});
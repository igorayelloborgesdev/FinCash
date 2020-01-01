var assert = require('assert');
const ContaCorrente = require('../Business/ContaCorrenteBusiness');
let contaCorrente = new ContaCorrente();
const ContaDespesa = require('../Business/ContaDespesaBusiness');
let contaDespesa = new ContaDespesa();
describe('ContaCorrente', function() {
    xit('Deve trazer as contas correntes', function() {
        contaCorrente.GetContaCorrente().then( result =>{                 
            assert(result);
        });                         
    });
});
describe('ContaDespesa', function() {
    it('Deve trazer as contas despesas', function() {
        contaDespesa.GetContaDespesa().then( result =>{ 
            console.log(result);
            assert(result);
        });                         
    });
});
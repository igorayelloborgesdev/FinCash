var assert = require('assert');
const Operacao = require('../Business/OperacaoBusiness');
let operacao = new Operacao();
describe('Operacao', function() {
    it('Deve trazer as operações', function() {
        operacao.GetOperacao().then( result =>{             
            assert(result);
        });                         
    });
});
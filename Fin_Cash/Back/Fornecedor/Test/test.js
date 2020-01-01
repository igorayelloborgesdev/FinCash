var assert = require('assert');
const Fornecedor = require('../Business/FornecedorBusiness');
let fornecedor = new Fornecedor();
describe('Fornecedor', function() {
    it('Deve trazer os fornecedores', function() {
        fornecedor.GetFornecedor().then( result =>{              
            assert(result);
        });                         
    });
});
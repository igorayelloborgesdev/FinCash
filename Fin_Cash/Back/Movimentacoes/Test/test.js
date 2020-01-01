var assert = require('assert');
const Movimentacoes = require('../Business/MovimentacoesBusiness');
let movimentacoes = new Movimentacoes();
describe('Movimentações', function() {
    it('Deve inserir, consultar, atualizer e excluir movimentações', function() {
        var mov = { 
            contaCorrenteID: 39,
            contaDespesaID: 39,
            filialID: 641,
            fornecedoresID: 17,
            matrizID: 194,
            tipoDocumentoID: 2,
            numMovimetacao: '11006',
            numNotaFiscal: '11006',
            numDocumento: '11006',
            dataEmissao: '2019-06-28T03:37:25.124Z',
            dataCompetencia: '2019-08-24T07:47:28.504Z',
            dataVencimento: '2019-09-05T09:53:20.163Z',
            dataBaixa: '2019-02-20T02:28:27.727Z',
            valorOriginal: 8984.34,
            valorBaixado: 8873.1,
            valorContrapartida: 6081.61,
            valorCaixaCorrente: 4462.73,
            valorReceitaDespesa: 3942.03,
            idUsuario: 2
        };

        var filtro = {
            id: 100,
            contaCorrenteID: 74,
            contaDespesaID: 44,
            filialID: 1173,
            fornecedoresID: 22,
            matrizID: 243,
            tipoDocumentoID: 2,
            numMovimetacao: '1094',
            numNotaFiscal: '1094',
            numDocumento: '1094',
            valorOriginal: 7040.91,
            valorBaixado: 2841.72,
            valorContrapartida: 7053.32,
            valorCaixaCorrente: 6926.1,
            valorReceitaDespesa: 6389.55,
            idUsuario: 1,
            dataEmissao1: '2019-09-01T03:14:57.110Z',
            dataEmissao2: '2019-09-16T03:14:57.110Z',
            dataCompetencia1: '2019-01-01T15:41:34.254Z',
            dataCompetencia2: '2019-01-26T15:41:34.254Z',
            dataVencimento1: '2019-07-01T21:05:01.735Z',
            dataVencimento2: '2019-07-04T21:05:01.735Z',
            dataBaixa1: '2019-10-01T07:18:56.115Z',
            dataBaixa2: '2019-10-08T07:18:56.115Z'
        }

        movimentacoes.CreateMovimentacoes(mov).then( result =>{            
            assert(result);
            mov.tipoDocumentoID = 1;
            movimentacoes.UpdateMovimentacoes(mov, result).then( result2 =>{            
                assert(result2);
                movimentacoes.SelectMovimentacoes(filtro).then( result3 =>{            
                    assert(result3);  
                    
                    console.log(result3);
                    
                    movimentacoes.DeleteMovimentacoes(result).then( result4 =>{            
                        assert(result4);
                    });
                });                
            });            
        });        
    });
});
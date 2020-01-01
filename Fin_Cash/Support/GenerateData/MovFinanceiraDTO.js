const movFinanceiraDTO = (
        aContaCorrenteID,
        aContaDespesaID,
        aFilialID,
        aFornecedoresID,
        aMatrizID,
        aTipoDocumentoID,

        aNumMovimetacao,
        aNumNotaFiscal,
        aNumDocumento,

        aDataEmissao,
        aDataCompetencia,
        aDataVencimento,
        aDataBaixa,
        
        aValorOriginal,
        aValorBaixado,
        aValorContrapartida,
        aValorCaixaCorrente,
        aValorReceitaDespesa,

        aIdUsuario
) =>{
    return {
        contaCorrenteID: aContaCorrenteID,
        contaDespesaID: aContaDespesaID,
        filialID: aFilialID,
        fornecedoresID: aFornecedoresID,
        matrizID: aMatrizID,
        tipoDocumentoID: aTipoDocumentoID,
        numMovimetacao: aNumMovimetacao,
        numNotaFiscal: aNumNotaFiscal,
        numDocumento: aNumDocumento,
        dataEmissao: aDataEmissao,
        dataCompetencia: aDataCompetencia,
        dataVencimento: aDataVencimento,
        dataBaixa: aDataBaixa,
        valorOriginal: aValorOriginal,
        valorBaixado: aValorBaixado,
        valorContrapartida: aValorContrapartida,
        valorCaixaCorrente: aValorCaixaCorrente,
        valorReceitaDespesa: aValorReceitaDespesa,
        idUsuario: aIdUsuario
      }
  }

  exports.movFinanceiraDTO = movFinanceiraDTO;
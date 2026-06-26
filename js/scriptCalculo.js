const calcularSeguro = (objVeiculo) => {
    let valorSeguro = ''

    valorSeguro = objVeiculo.valorMercado * 0.10

    return valorSeguro
}

const calcularIpva = (objVeiculo) => {
    let ipva = ''
    let idadeVeiculo = 2026 - objVeiculo.ano

    if (idadeVeiculo > 20) {
        ipva = 'Isento'
    } else if (objVeiculo.tipoCombustivel === 'gasolina') {
        ipva = 'R$' + objVeiculo.valorMercado * 0.20
    }else if (objVeiculo.tipoCombustivel === 'etanol') {
        ipva = 'R$' + objVeiculo.valorMercado * 0.15
    }else if (objVeiculo.tipoCombustivel === 'biocombustivel') {
        ipva = 'R$' + objVeiculo.valorMercado * 0.10
    }else if (objVeiculo.tipoCombustivel === 'hibrido') {
        ipva = 'R$' + objVeiculo.valorMercado * 0.08
    }else {
        ipva = 'R$' + objVeiculo.valorMercado * 0.02
    }

    return ipva
}

export{calcularIpva,calcularSeguro}
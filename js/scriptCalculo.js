// EXPORTANDO AS FUNÇÕES DE CÁLCULO

export const calcularSeguro = (valorMercado) => {
    return valorMercado * 0.10;
};

export const calcularIpva = (ano, valorMercado, tipoCombustivel) => {
    let ipva = 0;
    let ehIsento = false;
    const anoAtual = 2026;
    const idadeVeiculo = anoAtual - ano;

    if (idadeVeiculo <= 20) {
        if (tipoCombustivel === 'gasolina') {
            ipva = valorMercado * 0.20;
        } else if (tipoCombustivel === 'etanol') {
            ipva = valorMercado * 0.15;
        } else if (tipoCombustivel === 'bicombustivel' || tipoCombustivel === 'flex') {
            ipva = valorMercado * 0.10;
        } else if (tipoCombustivel === 'hibrido') {
            ipva = valorMercado * 0.08;
        } else if (tipoCombustivel === 'eletrico') {
            ipva = valorMercado * 0.02;
        }
    } else {
        ehIsento = true;
    }

    return { ipva: ipva, isento: ehIsento };
};
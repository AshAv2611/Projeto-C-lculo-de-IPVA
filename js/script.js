// IMPORTANDO AS FUNÇÕES DO ARQUIVO DE CÁLCULO
import { calcularSeguro, calcularIpva } from '../js/scriptCalculo.js';

//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divInterface = document.querySelector('#Interface')

//DECLARANDO UM ARRAY 
const veiculo = []

// CAPTURANDO O SUBMIT 
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const form_dados = new FormData(formDados)

    // CAPTURANDO O RÁDIO SELECIONADO: Busca na tela o input do tipo radio que está marcado (:checked)
    const radioMarcado = document.querySelector('input[type="radio"]:checked')

    let objVeiculo = {
        modelo: (form_dados.get('modelo')),
        marca: (form_dados.get('marca')),
        placa: (form_dados.get('placa')),
        ano: Number(form_dados.get('ano')),
        valorMercado: Number(form_dados.get('valorMercado')),
        
        // Se o usuário clicou em algum rádio, salvamos o ID dele ('gasolina', 'etanol', etc.)
        // Se não clicou em nenhum, deixa vazio ''
        tipoCombustivel: radioMarcado ? radioMarcado.id : ''
    }
    //CRIANDO CÁLCULO DO SEGURO
    const seguro = calcularSeguro(objVeiculo.valorMercado);

    //CRIANDO CÁLCULO DE IPVA
    const dadosIpva = calcularIpva(objVeiculo.ano, objVeiculo.valorMercado, objVeiculo.tipoCombustivel);

    // UNIFICANDO TUDO NO OBJETO FINAL QUE SERÁ ENVIADO
    const veiculoFinal = {
        ...objVeiculo, 
        seguro: seguro, 
        ipva: dadosIpva.ipva, 
        isento: dadosIpva.isento
    }

    addVeiculo(veiculoFinal)

    formDados.reset()
})

//ADICIONANDO VEICULOS NO ARRAY 
const addVeiculo = (objVeiculo) => {
    veiculo.push(objVeiculo)

    listVeiculo()
}

//FUNCAO PARA QUE OS VEICULOS SEJAM LISTADOS 
const listVeiculo = () => {
    divInterface.innerHTML = "" // Limpa a tela para não duplicar a lista a cada inserção
    
    veiculo.forEach((elem, i) => {
        divInterface.innerHTML += `<div class= 'item-pessoa'>${i + 1} - ${elem.marca} ${elem.modelo} (${elem.ano}) | 
        Placa: ${elem.placa} | 
        Valor: R$ ${elem.valorMercado.toFixed(2).replace('.', ',')} | 
        Seguro: R$ ${elem.seguro.toFixed(2).replace('.', ',')} | 
        IPVA: ${elem.isento ? 'Isento' : `R$ ${elem.ipva.toFixed(2).replace('.', ',')}`}</div>`
    })
}
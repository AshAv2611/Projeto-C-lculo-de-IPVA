import { calcularIpva } from "./scriptCalculo.js"
import { calcularSeguro } from "./scriptCalculo.js"



//Chamando elementos do dom 
//Como chamar elementos do dom em js?
const formDados = document.querySelector('#formulario')
const divInterface = document.querySelector('#Interface')

//Criando o array
//Como criar um array em js?
const veiculo = []

//Capturar os eventos inseridos no formulário pelo submit
formDados.addEventListener('submit', (evt)=>{
    // Interrompendo o reload da página 
    evt.preventDefault()

    //Criando o objeto formulario
    const form_dados = new FormData(formDados)
    
    //Criando o de veiculo
    const veiculo = {
        modelo : form_dados.get('modelo'),
        marca : form_dados.get('marca'),
        placa : form_dados.get('placa'),
        ano : form_dados.get('ano'),
        valorMercado : form_dados.get('valorMercado'),
        tipoCombustivel : form_dados.get('tipoCombustivel'), 
    }

    //Adicionar o objeto
    addVeiculo(veiculo)
    //Função listar veiculos
    listVeiculos()
    


    //Limpando o formulário para que possa inserir novos dados
    formDados.reset()

})

    //Função para que possamos adicionar o obejto pessoa
    const addVeiculo = (objVeiculo) =>{
        //Adicionar um veiculo no array
        veiculo.push(objVeiculo)
    }

    //Criando função para listar os veículos 
    const listVeiculos = () =>{
        veiculo.forEach((element,i) => {
            const ipva = calcularIpva(element)
            const seguro = calcularSeguro(element)

            divInterface.innerHTML += `O carro ${element.modelo} está com ipva ${ipva} ,
            ${element.marca}
            ${element.placa}
            ${element.ano}
            ${element.valorMercado}
            ${element.tipoCombustivel}
            ${seguro} 
            `
        });

    }


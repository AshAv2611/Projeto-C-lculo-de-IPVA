//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divInterface = document.querySelector("#Interface")

//DECLARANDO UM ARRAY 
const veiculo = []

// CAPTURANDO O SUBMIT 
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const form_dados = new FormData(formDados)

    const veiculo = {
        modelo: (form_dados.get('modelo')),
        marca: (form_dados.get('marca')),
        placa:(form_dados.get('placa')),
        ano: (form_dados.get('ano')),
        valorMercado: (form_dados.get('valorMercado')),
        tipoCombustivel: (form_dados.get('tipoCombustivel')),
    }

    addVeiculo(veiculo)

    formDados.reset()
    


})

//ADICIONANDO VEICULOS NO ARRAY 
const addVeiculo = (objVeiculo) =>{
    veiculo.push(objVeiculo)

    listPessoa()
}

//FUNCAO PARA QUE OS VEICULOS SEJAM LISTADOS 
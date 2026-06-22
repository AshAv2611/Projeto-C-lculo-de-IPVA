const formDados = document.querySelector('#formulario')
const divInterface = document.querySelector("#Interface")


// CAPTURANDO O SUBMIT 

formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const form_dados = new FormData(formDados)


    const modelo = (form_dados.get('modelo'))
    const marca = (form_dados.get('marca'))
    const placa = (form_dados.get('placa'))
    const ano = (form_dados.get('ano'))
    const valorMercado = (form_dados.get('valorMercado'))
    const tipoCombustivel = (form_dados.get('tipoCombustivel'))

})
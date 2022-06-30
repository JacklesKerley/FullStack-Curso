/*

FETCH

*/

function transformarEmJson(response) {
    return response.json()
}

function exibirNaTela (dados) {
    console.log('exibir na tela', dados)
}

function exibirErro() {
    console.log('ops, deu erro!')
}

const botaoCarregar = document.querySelector('#botaoCarregar')

botaoCarregar.onclick = () => 
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(transformarEmJson)
        .then(exibirNaTela) //chama o resolve
        .catch(exibirErro) //chama o reject








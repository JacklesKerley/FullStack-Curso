/*

ASYNC / AWAIT - transformar uma chamada assincrona em sincrona

*/

function transformarEmJson(response) {
    return response.json()
}

function exibirNaTela (dados) {
    console.log(dados)
}

function exibirErro() {
    console.log('ops, deu erro!')
}

const botaoCarregar = document.querySelector('#botaoCarregar')

botaoCarregar.onclick = aoClicarNoBotao

async function aoClicarNoBotao() { 
    const dados = await fetch('https://jsonplaceholder.typicode.com/photos')
        .then(transformarEmJson)
        .catch(exibirErro)

    console.log(dados)
}








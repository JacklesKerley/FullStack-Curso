/*

DESTRUCTURING ASSIGMENT - desestruturação de atribuição

*/

//exemplos

// const obj = {
//     nome: 'Fulano',
//     idade: 35
// }

// // const nome = obj.nome //jeito que era feito

// const {nome, idade} = obj //criando uma const nome e uma idade

// //posso atribuir um novo 'nome' para a variavel
// //const {nome: nomeDoUsuario}

// console.log(nome)

// //-------------------------------------

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
    const dados = await fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(transformarEmJson)
        .catch(exibirErro)

    const {name, email, phone} = dados

    console.log (email, name, phone)
}








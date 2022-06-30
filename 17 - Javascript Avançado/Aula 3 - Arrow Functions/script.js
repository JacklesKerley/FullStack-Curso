

/*

ARROW FUNCTION

INSERIDA ES6

FUNÇÕES DE SETA NOS PERMITEM ESCREVER UMA SINTAXE DE FUNÇÃO MAIS CURTA

*/

// const teste = (param1, param2) => {
//     return param1 + param2
// }

const soma = (param1, param2) => param1 + param2 //retorno implicito

const resultado = soma(1, 2)

console.log(resultado)

//quando existe somente um parametro não é necessário colocar parenteses
const teste = param1 => param1

console.log(teste('ok'))

const botao = document.querySelector('#botao')

// botao.onclick = function () {
//     console.log(this)
// }//o this aqui chama a tag do button

botao.onclick = () => {
    console.log(this)
} //quando utilizado o this em uma arrow ela puxa o escopo de quem declarou ela Ex:fazendo assim o this chama o window
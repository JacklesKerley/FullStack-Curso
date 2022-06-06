

let inputNumber = prompt('Digite o número para tabuada desejada!')
let number = parseInt(inputNumber)
let tabuada = ''

for (let contador = 0; contador <= 10; contador++) {
    tabuada += `${number} x ${contador} = ` + contador * number + '<br>'
}

document.write(tabuada)

//--------------- Correção

// let inputTabuada = prompt('Digite qual tabuada você quer saber:')

// let tabuada = parseInt(inputTabuada)

// for (let contador = 1; contador <= 10; contador++) {
//   let resultado = tabuada * contador
  
//   let mensagem = `${tabuada} x ${contador} = ${resultado} <br>`
  
//   document.write(mensagem)  
// }
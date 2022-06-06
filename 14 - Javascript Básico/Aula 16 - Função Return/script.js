

function soma(num1, num2) {
    return num1 + num2
}//Permite imprimir onde eu desejar, tanto no console quanto tela

let resultado = soma(10, 5)

console.log(resultado)
document.write(resultado + '<br>')

//Exemplo

// function milhasEmKm(milhas) {
//     return milhas * km 
// }

function milhasEmKm(milhas) {
    let km = milhas * 1.6

    return km
}//boa pratica deixar o rertun sempre com uma linha de espaço

let result = milhasEmKm(150)
document.write(result)
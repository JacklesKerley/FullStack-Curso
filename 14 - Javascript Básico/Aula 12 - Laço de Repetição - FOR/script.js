
// //a sintaxe do for é necessário ter 3 instrução, primeira instrução corresponde a uma variavel (contador), segunda diz até quanto o será o limite (quantidade), terceira modificar a variavel

// for (contador = 0; contador <= 3; contador++) {
//     document.write(`Hello World ${contador}`)
//     document.write('<br>')
// }


let opcoes
let selecionar = '<option>--Selecionar--</option>'

for (let contador = 2021; contador >= 1900; contador--) {
    opcoes += `<option>${contador}</option>` 
}//caso não faça a concatenação os valores são sobrepostos e acaba aparecendo somente o ultimo valor

document.querySelector('#ano').innerHTML = selecionar + opcoes

let lista = ''

let clientes = ['jack' , 'mari' , 'erik' , 'fernandinho']

for (let contador = 0; contador < clientes.length; contador++) {
    lista += `<li>${clientes[contador]} - ${contador}</li>`
}

document.querySelector('#listaClientes').innerHTML = lista
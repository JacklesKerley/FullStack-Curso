let clientes = [
    {
        nome: 'Jackles',
        idade: 32,
        linguagens: ['javascript', 'python','php']
    },
    {
        nome: 'Mari',
        idade: 31,
        linguagens: ['c#', 'c++','c']
    },
    {
        nome: 'Beth',
        idade: 53,
        linguagens: ['go', 'closure','r']
    },
]

// for(let contador = 0; contador < clientes.length; contador++){
//     console.log(clientes[contador].nome)
// }

//forma simplificada

let htmlClientes = ''

for(let cliente of clientes){
    let listaLinguagens = ''

    for(let linguagem of cliente.linguagens){
        listaLinguagens += `<li>${linguagem}</li>`
    }
    
    htmlClientes += `
        <li>
            <b>Nome: </b> ${cliente.nome} <br>
            <b>Idade: </b> ${cliente.idade} <br>
            <b>Linguagens: </b><br>
            <ul>
                ${listaLinguagens}
            </ul>
        </li>
    `
}

//clientes - array e cliente é um item do array
//não tem controle quanto ao contador (irá percorrer todo o array)

document.querySelector('#listaClientes').innerHTML = htmlClientes
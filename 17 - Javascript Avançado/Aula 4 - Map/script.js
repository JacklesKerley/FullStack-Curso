
const clientes = [
    {name: 'Fulano', lastname: 'Da Silva'},
    {name:'Ciclano' , lastname:'Santos'},
    {name:'Beltrano', lastname:'Moreira'}
]

// ex. ['Fulano Da Silva', 'Ciclano Santos']

//1 abordagem
// let clientesFinal = []

// clientes.forEach(function(cliente) {
//     clientesFinal.push(cliente.name + ' ' + cliente.lastname)
// })

// console.log(clientesFinal)

//outra forma (funcional)
// const clienteFinalMap = clientes.map((cliente) => {
//     return cliente.name + ' ' + cliente.lastname
// })//sempre monta um array

const clienteFinalMap = clientes.map(cliente => cliente.name + ' ' + cliente.lastname)

console.log(clienteFinalMap)
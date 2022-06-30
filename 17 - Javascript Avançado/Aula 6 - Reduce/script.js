
const clientes = [
    {name: 'Thiago', score: 14},
    {name:'Jaqueline' , score: 18},
    {name:'Sarah', score: 20},
    {name: 'Clara', score: 50},
    {name: 'Sophia', score: 98},
]

//acc = accumulator
//curr = current
const clientesFinal = clientes.reduce((acc, curr) => {
    if (curr.score > 50) {
        acc.pass.push(curr)
    } else {
        acc.fail.push(curr)
    }

    return acc
}, {
    pass: [],
    fail: []
})

console.log(clientesFinal)


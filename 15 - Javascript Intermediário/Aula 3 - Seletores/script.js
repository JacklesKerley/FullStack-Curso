
//SELETOR POR ID
document.querySelector('#titulo').innerHTML = '<i>Exemplo</i>' //seletor para id #

//SELETOR POR TAG
document.querySelector('a').innerText = '<b>Teste ancora</b>' //seleciona somente um ta (no caso o primeiro)

//innerText != de HTML - o text entende somente como texto, o html diferencia tag ex '<b>hello World</b>' texto iria escrever exatamente como esta.

//SELECIONANDO MAIS DE 1 ITEM por tag
// document.querySelectorAll('a') //seleciona todas as tag como array

// FOREACH
// let teste = ['a', 'b', 'c']

// teste.forEach(function(item){
//     console.log(item)
// }
// )

let ancoras = document.querySelectorAll('a')

ancoras.forEach(function(elemento){ //função anonima / callback
    elemento.innerHTML = 'Teste'
})

//SELECIONANDO MAIS DE 1 ITEM POR CLASSE

let boxes = document.querySelectorAll('.box')

// let count = 0
// boxes.forEach((function(box){
//     count++
//     box.innerHTML = 'box ' + count
// }))

// boxes.forEach((function(box, index){
//     box.innerHTML = 'box ' + (index + 1)
// }))

boxes.forEach((function(box, index){
    box.innerHTML = 'box ' + index
}))
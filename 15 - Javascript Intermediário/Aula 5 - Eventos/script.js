
let botaoTeste = document.querySelector('#botaoTeste')

botaoTeste.onclick = function() {
    console.log('msg 1')
}

// botaoTeste.onclick = function() {
//     console.log('msg 2')
// }

//Ao realizar dessa forma estará subescrevendo a função anterior, parecido com atribuição de variavel

//utilizamos a atribuição a seguir para realizar mais de uma função 

//addEventListener - primeiro parametro é o evento e o segundo é a funcão a ser executada
// botaoTeste.addEventListener('click', function (){
//     console.log('mensagem 1')
// })

// botaoTeste.addEventListener('click', function (){
//     console.log('mensagem 2')
// })

//forma mais utilizada, pode ser usada a função para outros momentos


// function cliqueBotao() {
//     console.log('mensagem 1')

//     botaoTeste.removeEventListener('click', cliqueBotao)//remove a função do botão click
// }

botaoTeste.addEventListener('click', cliqueBotao)

//pode ser feito com contador

// let contador = 0

// function cliqueBotao() {
//     contador++
//     console.log('mensagem 1')
    
//     if (contador >=5) {
//         botaoTeste.removeEventListener('click', cliqueBotao)
//     }
// }




/*

Escopo global
Escopo local

- O ESCOPO DETERMINA A VISIBILIDADE DE UMA VARIAVEL

- AS FUNÇOES NO JS CRAM O SEU PROPRIO ESCOPO
    AS VARIAVEIS DE UMA FUNCAO NAO SAO ACESSIVEIS FORA DELA

*/

let b = 453 //escopo global

function teste() {
    let a = 123 //escopo local da função

    console.log(a)
}

teste()
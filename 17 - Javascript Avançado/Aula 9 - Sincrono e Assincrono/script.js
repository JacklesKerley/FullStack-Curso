/*
Sincrono x Assincrono

*/

function primeira() {
    console.log('primeira')

    //a função FOR seria um codigo sincrono, pois espera ser executado para dar sequencia nos codigos
}

function segunda() {
    console.log('segunda')
}

setTimeout(primeira, 2000) //assincrono

segunda()


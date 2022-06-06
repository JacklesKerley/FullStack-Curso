/*

let idade = prompt('digite sua idade')//O valor digitado entra como string

if (idade >= 18) {
    document.write('ok, você é maior de idade')
} else if (idade === 17) {
    document.write('você tem 17 anos')
} else {
    document.write('você não é maior de idade')
}

*/


let nome = prompt('digite seu nome')


// o sinal || quer dizer ou
if (nome === 'Jackles' || nome === 'jackles') {
    document.write(`Olá ${nome}, seja bem vindo!`)
} else {
    document.write('você não é um adm!')
}
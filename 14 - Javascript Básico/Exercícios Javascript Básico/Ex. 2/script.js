
let nome = prompt('Digite seu nome')
let idade = parseInt(prompt('Digite sua idade'))

let mIdade = ''

if (idade >= 18) {
    mIdade = 'MAIOR'
} else {
    mIdade = 'MENOR'
}

let eleve = ''

if (nome.toLowerCase() === 'jack') {
    eleve = ('Você faz parte do time Eleve!')
}

let msg = (`Olá ${nome}, você é ${mIdade} de idade! ${eleve}`)

document.write(msg)



function login() {
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

    let msg = (`Olá ${nome}, você é ${mIdade} de idade!`)

    document.querySelector('#saudacao').innerHTML = msg
    document.querySelector('#validacao').innerHTML = eleve
}



// document.querySelector('#saudacao').innerHTML = msg

function login() {
    let inputNome = prompt('Digite seu nome')
    let inputIdade = prompt('Digite sua idade')
    let idade = parseInt(inputIdade)

    //Colocar a validação de dados preenchido no começo economiza processamento de codigo

    if (inputNome === '' || inputIdade === '') {
        alert('Digite os dados corretamente')
        return
    }

    let mIdade = ''

    if (idade >= 18) {
        mIdade = 'MAIOR'
    } else {
        mIdade = 'MENOR'
    }

    let eleve = ''

    if (inputNome.toLowerCase() === 'jack') {
        eleve = ('Você faz parte do time Eleve!')
    }

    let msg = (`Olá ${inputNome}, você é ${mIdade} de idade!`)

    document.querySelector('#saudacao').innerHTML = msg
    document.querySelector('#validacao').innerHTML = eleve

    // if (inputNome === '' || inputIdade === '') {
    //     document.querySelector('#saudacao').innerHTML = ('Digite os dados corretamente')
    // } else {
    //     document.querySelector('#saudacao').innerHTML = msg
    //     document.querySelector('#validacao').innerHTML = eleve
    // }
}

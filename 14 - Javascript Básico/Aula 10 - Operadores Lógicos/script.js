let imputNota1 = prompt('digite a primeira nota')
let imputNota2 = prompt('digite a segunda nota')

let nota1 = parseInt(imputNota1)//Transforma o imput que veio em forma de string em number
let nota2 = parseInt(imputNota2)

let mediaMinima = 7

let media = (nota1 + nota2) / 2

if (media >= mediaMinima) {
    document.write ('Ok, passou de ano!')
} else if (media < mediaMinima) {
    document.write ('Ops, não passou de ano!')
}

document.write('<br><br>')

//o Sinal de && representa and
if (media >= mediaMinima && media === 10) {
    document.write ('NOSSAAA, você foi muito bem, continue assim!10')
} else if (media >= mediaMinima && media < 10 && media >= 9) {
    document.write("Você mandou bem, mas vamos tentar chegar a 10?")
} else if (media >= mediaMinima && media < 9) {
    document.write('Você conseguiu, mas acredito que pode melhorar!')
} else if (media < mediaMinima && media >= 6) {
    document.write('Poxa, quase que você conseguiu, mas se esforce mais na proxima!')
} else {
    document.write('Poxa, não foi dessa vez!')
}

document.write(`<br><br> Sua Nota é ${media}`)

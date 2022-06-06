let diaSemana = new Date().getDay()
console.log(diaSemana)

let nomeDiaSemana

// if (diaSemana === 3) {
//     document.write('o dia da semana é: quarta-feira')
// }

//ao invês do if podemos utilizar o switch

switch (diaSemana) {
    case 0:
        nomeDiaSemana = 'domingo'
        break;// caso ele encontre o resultado ele para de processar o codigo
    case 1:
        nomeDiaSemana = 'segunda-feira'
        break;
    case 2:
        nomeDiaSemana = 'terça-feira'
        break;
    case 3:
        nomeDiaSemana = 'quarta-feira'
        break;
    case 4:
        nomeDiaSemana = 'quinta-feira'
        break;
    case 5:
        nomeDiaSemana = 'sexta-feira'
        break;
    case 6:
        nomeDiaSemana = 'sabado'
        break;
    default:
        break;
}

document.write(`o dia da semana é: ${nomeDiaSemana}`)
/*

string
number
boolean
array
object
undefined
null

*/

//string
let nome = 'Jackles'
let sobrenome = 'Kerley'

//string - concatenada
//console.log(nome + ' ' + sobrenome) - forma antiga de fazer 

//string literal
console.log(`${nome} ${sobrenome}`)//utiliza crase ao inves de aspas e coloca o comando &{} e declara a variavel

//------------

//number
let idade = 32
console.log(idade + 10)

//numbur float - numeros de pontos flutuantes

let porcentagem = 10.2 //Colocar com ponto ao inves de virgula
console.log(porcentagem + '%')

//------------

//boolean (true ou false)
let maiorDeIdade = true
console.log(maiorDeIdade)

let menorDeIdade = false
console.log(menorDeIdade)

//------------

//array - permite guardar mais de uma coisa
let habilidades = ['JavaScript', 'PHP' , 'Python' ] //utiliza cochetes
console.log(habilidades)
console.log(habilidades.length)//verificar o tamanho do array
console.log(habilidades[2])//escolhe a posição do array, caso escolha uma posição nao existente retorna o valor de undefined

//------------

//objeto - parecido com array porem permiti mais flexibilidade, guarda dados de maneira especifica
let pessoa = {
    nome: 'fulano',
    sobrenome: 'da Silva',
    idade: 25,
    habilidades: ['C++' , 'C#' , 'Python']
}
console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.habilidades[1])

//JSON (JAVASCRIPT OBJECT NOTATION) - linguagens de programação utilizam para se comunicar

//------------

//undefined
let endereco
console.log(endereco)

//null
let cidade = null
console.log(cidade)













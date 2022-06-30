/*

JSON = JAVASCRIPT OBJECT NOTATION

*/

const objeto = {
    nome: 'Jack',
    idade: 32,
} //JSON necessariamente precisa ter as propiedades entre ""

//como transformar nosso objeto em formato JSON?

const json = JSON.stringify(objeto)

console.log(json)

//caso tenha recebido um codigo em JSON preciso decodificar ele (parse)

const jsonParseado = JSON.parse(json)
console.log(jsonParseado)
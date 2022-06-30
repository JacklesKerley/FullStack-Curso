/*
LOCAL STORAGE - ARMAZENAMENTO LOCAL (ARMAZENAR ALGO NO COMPUTADOR DO USUARIO)

*/

// localStorage.setItem('tarefa', 'estudar javascript') //chave e valor

// const valor = localStorage.getItem('tarefa')

// console.log(valor)

const tarefas = [
    {tarefa: 'estudar js'},
    {tarefa: 'estudar node.js'},
    {tarefa: 'estudar react.js'},
]

const tarefasJson = JSON.stringify(tarefas)

localStorage.setItem('tarefas', tarefasJson)

const listaTarefasSalvas = localStorage.getItem('tarefas')

const listaTarefasObj = JSON.parse(listaTarefasSalvas)

console.log(listaTarefasObj)
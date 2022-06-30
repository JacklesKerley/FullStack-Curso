
let quadrado = document.querySelector('.quadrado')

function minhaFuncao(evento) {
    console.log(evento.key)
}

//EVENTO-------------

// quadrado.onclick = minhaFuncao

//quadrado.onmousemove = minhaFuncao //chama a função quando move o mouse dentro do elemento

//quadrado.onmouseenter = minhaFuncao //chama a função somente quando entra no elemento

//quadrado.onmouseout = minhaFuncao //inverso do mouse enter

//window.addEventListener('resize', minhaFuncao) //mostra o redimensionamento da pagina

window.addEventListener('keypress', minhaFuncao)//mostra as teclas apertadas dentro da pagina


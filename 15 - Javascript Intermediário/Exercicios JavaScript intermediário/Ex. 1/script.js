let contador = document.querySelector('#contador')
let diminuir = document.querySelector('#diminuir') 
let aumentar = document.querySelector('#aumentar')
let count = 0

contador.innerHTML = count

// diminuir.onclick = descremento
diminuir.addEventListener('click', descremento)

function descremento(){
    if (count > 0) {
        count--
        contador.innerText = count
    }
}

// aumentar.onclick = encremento
aumentar.addEventListener('click', encremento)

function encremento(){
    count++
    contador.innerText = count
}



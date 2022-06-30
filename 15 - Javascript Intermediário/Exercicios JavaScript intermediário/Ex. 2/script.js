let contador = document.querySelector('#contador')
let btnDiminuir = document.querySelector('#btnDiminuir') 
let btnAumentar = document.querySelector('#btnAumentar')


let count = 0

contador.innerHTML = count

let decrementoInterval
let incrementoInterval


btnDiminuir.onclick = function(){ 
    clearInterval(incrementoInterval)

    decrementoInterval = setInterval(function() {
        if (count >= 1) {
            count--
            contador.innerText = count

            btnDiminuir.classList.add('activeRed')
            btnAumentar.classList.remove('activeGreen')
        } else {
            clearInterval(decrementoInterval)

            btnDiminuir.classList.remove('activeRed')
            btnAumentar.classList.remove('activeGreen')
        }
    }, 10)
}

btnAumentar.onclick = function(evento) {
    clearInterval(decrementoInterval)
    
    incrementoInterval = setInterval(function() {
        count++
        contador.innerText = count
    }, 10)

    if (count >= 0) {
        btnAumentar.classList.add('activeGreen')
        btnDiminuir.classList.remove('activeRed')
    } else {
        btnDiminuir.classList.remove('activeRed')
        btnAumentar.classList.remove('activeGreen')
    }
    
}


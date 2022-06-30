let toast = document.querySelector('.toast')
let botaoCadastrar = document.querySelector('#botaoCadastrar')

botaoCadastrar.onclick = function() {
    toast.classList.add('visible')

    setTimeout(function(){
        toast.classList.remove('visible')
    }, 5000)
}






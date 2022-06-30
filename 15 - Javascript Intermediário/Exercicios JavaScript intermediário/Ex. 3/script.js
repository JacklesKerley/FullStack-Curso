
const cidades = {
    sp: ['Jundiaí', 'Campinas', 'Limeira', 'Atibaia'],
    rj: ['Teresópolis', 'Resende', 'Maricá', 'Macaé'],
}

const formCadastro = document.querySelector('#formCadastro')
const selectEstados = document.querySelector('#selectEstados')
const selectCidades = document.querySelector('#selectCidades')
const divCidades = document.querySelector('#divCidades')


selectEstados.onchange = function(e) {
    const estado = e.target.value //alvo é o valor da função e (que está onchange de select estados)

    let listaCidades

    if (estado === 'sp') {
        listaCidades = cidades.sp
    }

    if (estado === 'rj') {
        listaCidades = cidades.rj
    }

    let htmlCidades = `<option value=''>-- Selecione a Cidade --</option>`

    for(let cidade of listaCidades) {
        htmlCidades += `<option value='${cidade}'>${cidade}</option>`
    }

    selectCidades.innerHTML = htmlCidades
    divCidades.classList.add('visible')
}

formCadastro.onsubmit = function(e) {
    e.preventDefault()

    let temErro = false

    let selectEstado = document.forms['formCadastro']['estado']
    let selectCidade = document.forms['formCadastro']['cidade']

    if(!selectEstado.value){
        temErro= true
        selectEstado.classList.add('inputError')

        let span = selectEstado.nextSibling.nextSibling
        span.innerText = 'Selecione o Estado'
    } else {
        selectEstado.classList.remove('inputError')

        let span = selectEstado.nextSibling.nextSibling
        span.innerText = ''
    }

    if(!selectCidade.value){
        temErro = true
        selectCidade.classList.add('inputError')

        let span = selectCidade.nextSibling.nextSibling
        span.innerText = 'Selecione a Cidade'    
      } else {
        selectCidade.classList.remove('inputError')

        let span = selectCidade.nextSibling.nextSibling
        span.innerText = ''    
      }

      if (!temErro) {
        formulario.submit()
      }
}
    


let listaAtores = [
    {
        nome: 'Keanu Reeves',
        personagem: 'Neo',
        filme: 'The Matrix',
    },
    {
        nome: 'David Prowse',
        personagem: 'Darth Vader',
        filme: 'Star Wars Episódios IV-VI',
    },
    {
        nome: 'Bruce Wayne',
        personagem: 'Batman',
        filme: 'Batman - O Início'
    },
]

let htmlAtores =''

for(let ator of listaAtores) {
    htmlAtores += `
        <div>
            <h1>${ator.nome}</h1>
            <p>Interpreta o personagem ${ator.personagem} no filme ${ator.filme}.</p>
        </div>
    `
   
}

document.querySelector('#sub').innerHTML = htmlAtores

//COREÇÃO-----------------------------------

// let htmlAtores = ''

// for (let contador = 0; contador < listaAtores.length; contador++) {
//   let ator = listaAtores[contador] // isso facilita para não ficar repetindo código
//   let nome = ator.nome
//   let personagem = ator.personagem
//   let filme = ator.filme

//   htmlAtores += `
//     <div class="actor">
//       <h3>${nome}</h3>
//       <p>Interpreta o personavem ${personagem} no filme ${filme}.</p>
//     </div>
//   `
// }

// const content = document.querySelector('#content')
// content.innerHTML = htmlAtores
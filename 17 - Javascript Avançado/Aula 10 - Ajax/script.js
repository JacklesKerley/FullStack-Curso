/*

tecnica para fazer requisições a um determinado servidor

AJAX - criado em 2005

asynchronous JavaScript And XML

Rotas ou and points - determinado caminho para obter informação

*/

const xhttp = new XMLHttpRequest()

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        const response = JSON.parse(this.responseText)

        console.log(response[0])
    }
}//readyState 4 é quando a execução tiver finalizada e status = 200 que é a resposta do servidor que está ok 

xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true)//sincrono = true, assincrono = false
xhttp.send()





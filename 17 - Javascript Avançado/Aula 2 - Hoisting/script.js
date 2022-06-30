

/*

HOISTING (IÇAR, ERGUER)

HOISTING É O COMPORTAMENTO PADRAO DO JS DE MOVER AS DECLARAÇÕES PARA O TOPO DO UM ESCOPO

*/

function teste() {
    outraFuncao()

    function outraFuncao() {
        console.log('outra função')
    } //no js toda declaração é erguida para o topo, sendo assim mesmo que chame a função antes deça ser declara vai ser executado

    //boa pratica é manter toda declaração no topo
}

teste()

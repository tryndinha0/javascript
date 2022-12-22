var contador = 0
function clicar() {
    var res = document.querySelector('p#res')
    contador++
    res.innerHTML = `O contador está com <mark>${contador}</mark> cliques`
}

function zerar(){
    
    contador = 0
    res.innerHTML = ''
}
function clicar(){
    var n = Number(prompt('Digite um número'))
    var msg =''
    if(n%2 == 0){
        msg = 'PAR'
    }else{
        msg = 'ÍMPAR'
    }

    var res = document.querySelector('p#res')
    res.innerHTML = `O número ${n} que foi digitado é <strong>${msg}!</strong>`
}
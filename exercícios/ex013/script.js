function clicar(){
    var res = document.querySelector('p#res')
    var n1 = Number(prompt('Digite um número:'))
    var n2 = Number(prompt('Digite outro número:'))
    var maior = ''
    if(n1 > n2){
        maior = n1
    }else{
        maior = n2
    }

    res.innerHTML = `Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${maior}</strong> `
}
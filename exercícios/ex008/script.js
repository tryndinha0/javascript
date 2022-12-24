
function clicou(){
var num = Number(prompt('Digite um número:'))
var res = document.querySelector('p#res')
res.innerHTML = `<p>O número a ser analisado aqui será o <strong>${num}</strong></p> <hr>`
res.innerHTML += `<p>O seu valor absoluto é ${Math.abs(num)}</p>`
res.innerHTML += `<p>A sua parte inteira é ${Number.parseInt(num)}</p>`
res.innerHTML += `<p>O valor inteiro mais próximo é ${Math.round(num)}</p>`
res.innerHTML += `<p>A sua raiz quadrada é ${Math.sqrt(num)}</p>`
res.innerHTML += `<p>A sua raiz cúbica é ${Math.pow(num, 1/3)}</p>`
res.innerHTML += `<p>O valor de ${num}<sup>2</sup> é ${num ** 2}</p>`
res.innerHTML += `<p>O valor de ${num}<sup>3</sup> é ${num ** 3}</p>`

}

function clicou(){
var n1 = Number(prompt('Digite um número:'))
var n2 = Number(prompt('Digite outro número:'))
var res = document.querySelector('p#res')
var soma = n1 + n2
res.innerHTML = `A soma entre <mark>${n1}</mark> e <mark>${n2}</mark> é igual a <strong>${soma}</strong>!`
}
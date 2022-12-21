alert('Seja bem-vindo(a) ao meu site!')
function clicou(){
var num = prompt('Digite um número:')
var res = document.querySelector('p#res')
res.innerHTML = `O dobro de ${num} é ${num * 2} e a metade é ${num / 2}!`
}
var cot = Number(prompt('Antes de mais nada. Quanto está a cotação do dólar agora?'))

function clicou() {
   var res = document.querySelector('p#res')
   var valor = Number(prompt('Quantos R$ você tem na carteira?'))
   res.innerHTML = `Você tem ${valor/cot} dólares na carteira.`
   
   
}
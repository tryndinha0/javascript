
function clicou() {
  var produto = prompt('Qual é o produto que você está comprando?')
  var preço = Number(prompt(`Qual é o preco de ${produto}?`))
  var res = document.querySelector('p#res')
  var desconto = preço * 0.1
  var final = Number(preço - desconto)  
  res.innerHTML = `<h1>Calculando desconto de 10% para ${produto}</h1>`
  res.innerHTML += `<p>O preço original era R$${preço}</p>`
  res.innerHTML += `<p>Você acaba de ganhar R$${desconto} de desconto (-10%).</p>`
  res.innerHTML += `No fim, você vai pagar R$${final} no produto ${produto}`
   
}
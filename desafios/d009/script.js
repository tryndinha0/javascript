function clicou() {
  var func = String(prompt('Qual é o nome do funcionário?'))
  var sal = Number(prompt(`Qual é o salário de ${func}`))
  var por = Number(prompt(`O salário de ${func} vai ser reajustado em qual porcentagem?`))
  var aument = sal * (por/100)
  var res  = document.querySelector('p#res')
  res.innerHTML = `<h1>${func} recebeu um aumento salarial!</h1>`
  res.innerHTML +=`<p>O salário atual era ${sal}</p>`
  res.innerHTML += `<p>Com um aumento de ${por}%, o salário vai aumentar R$${aument} no próximo mês.</p>`
  res.innerHTML += `E a partir daí, ${func} vai passar a ganhar R$${sal + aument}`
}
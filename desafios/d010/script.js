function clicou() {
  var a = Number(prompt('Qual é o valor de a?'))
  var b = Number(prompt('Qual é o valor de b?'))
  var c = Number(prompt('Qual é o valor de c?'))
  var res = document.querySelector('p#res')
  if( a == 0 || b == 0 || c== 0 ){
    alert('Por favor, digite valores válidos.')
  }else{
  var delta = ( b ** 2 -4 * a * c) 
  res.innerHTML = `<h1>Resolvendo Bhaskara</h1>`
  res.innerHTML += `<p>A equação atual é <strong>${a}x<sup>2</sup> + ${b}x + ${c} = 0</strong></p>`
  res.innerHTML += `<p>O cálculo realizado sera <strong>△ = ${b}<sup>2</sup> -4 . ${a} . ${c}</strong></p>`
  res.innerHTML += `<p>O valor calculado foi <mark>△ = ${delta}</mark></p>`
  }
}
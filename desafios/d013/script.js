function clicou() {
 var nome = String(prompt('Qual é o nome do aluno?'))
 var n1 = Number(prompt(`Qual é a primeira nota de ${nome}`))
 var n2 = Number(prompt(`Qual é a segunda nota de ${nome}?`))
 var media = (n1+n2)/2
 var res = document.querySelector('p#res')
 var re = ''
 res.innerHTML = `<h1>Analisando a situação de ${nome}</h1>`
 res.innerHTML += `<p>Com as notas ${n1} e ${n2}, a <strong> média é ${media}</strong></p>`


 if(media < 3){
  var re = 'REPROVADO'
  res.innerHTML += `<p>Com média abaixo de 3,0, o aluno está <mark style="background-color:red">${re}</mark></p>`
 }else if(media < 6){
  var re = 'RECUPERAÇÂO'
  res.innerHTML += `<p>Com média entre 3,0 e 6,0, o aluno está <mark>${re}</mark></p>`
 }else{
  var re = 'APROVADO'
  res.innerHTML += `<p>Com média acima de 6,0, o aluno está <mark style="background-color:green">${re}</mark></p>`
 }
}
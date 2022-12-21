
function clicou(){
var nome = prompt('Qual é o nome do aluno?')
var n1 = Number(prompt(`Qual foi a primeira nota de ${nome}`))
var n2 = Number(prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`))
var media = (n1 + n2)/2
var res = document.querySelector('p#res')
res.innerHTML = `Calculando a média final de <mark>${nome}</mark>.`
res.innerHTML += `<p>As notas obtidas foram <mark>${n1} e ${n2}</mark>.</p>`
res.innerHTML += `A média final será <mark>${media}</mark>`
}
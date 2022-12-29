function clicou() {
 var antes = Number(prompt('Qual era o preço anterior do produto?'))
 var depois = Number(prompt('Qual é o preço atual do produto?'))
 var res = document.querySelector('p#res')
 res.innerHTML = '<h1>Analisando os valores informados</h1>'
 res.innerHTML += `<p>O produto custava R$${antes} e agora custa R$${depois}</p>`

if(antes > depois){
    res.innerHTML += 'Hoje o produto está mais barato'
    res.innerHTML += `<p>O preço caiu R$${antes-depois} em relação ao preço anterior</p>`
    res.innerHTML += `<p>Uma variação de ${(antes-depois)/antes*100}% pra baixo</p>`
}else{
    res.innerHTML += 'Hoje o produto está mais caro'
    res.innerHTML += `<p>O preço subiu R$${depois-antes} em relação ao preço anterior</p>`
    res.innerHTML += `<p>Uma variação de ${(depois-antes)/depois*100}% pra cima</p>`
}
}
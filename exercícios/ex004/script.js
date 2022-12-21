function clicou(){
    var nome = prompt('Qual é o seu nome?')
    var res = document.querySelector('p#resultado')
    res.innerHTML = `Olá, <strong>${nome}</strong>! É um grande prazer te conhecer! &#x1F596; `
}
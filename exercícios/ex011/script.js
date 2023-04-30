

function clicar(){
    var nome = prompt('Qual é o nome do aluno?')
    var n1 = Number(prompt(`Qual foi a primeira nota de ${nome}?`))
    var n2 = Number(prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`))
    media = (n1+n2)/2

    var msg = ""
    if(media>= 6){
        msg = 'Meus parabéns'
    }else{
        msg = 'Estude mais!'
    }

    var res = document.querySelector('p#res')
    res.innerHTML = `<p>Calculando a média final de <strong>${nome}</strong></p>`
    res.innerHTML += `<p>As notas obtidas foram ${n1} e ${n2}</p>`
    res.innerHTML += `<p>A média final será ${media}</p>`
    res.innerHTML += `<p>A mensagem que temos é: <strong style="color:red;">${msg}</strong></p>`
}
function clicar(){
    var ano = Number(prompt('Em que ano você nasceu?'))
    var res = document.querySelector('p#res')
    var date = new Date()
    var data = date.getFullYear()
    var idade = data - ano
    res.innerHTML = `Quem nasceu em ${ano} vai completar <strong>${idade}</strong> anos em ${data}`
}
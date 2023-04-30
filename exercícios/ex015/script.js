function clicar(){
    let meses = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
    let semana = new Array ('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb')
    var res = document.querySelector('p#res')
    var data = new Date()
    let sem = data.getDay()
    let mes = data.getMonth()
    res.innerHTML = `<p>Dia: <mark>${data.getDate()}</mark></p>`
    res.innerHTML += `<p>Mês: <mark>${meses[mes]}</mark></p>`
    res.innerHTML += `<p>Ano: <mark>${data.getFullYear()}</mark></p>`
    res.innerHTML += `<p>Dia da semana: <mark>${semana[sem]}</mark></p>`   
    res.innerHTML += `<p>Hora: <mark>${data.getHours()}</mark></p>`   
    res.innerHTML += `<p>Minutos: <mark>${data.getMinutes()}</mark></p>`   
    res.innerHTML += `<p>Segundos: <mark>${data.getSeconds()}</mark></p>`   
}
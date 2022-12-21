function carregar() {
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = 25//data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12 ){
        //BOM DIA
        img.src = 'manhã.png'
        document.body.style.background = '#e2cd9f'
    } else if(hora >= 12 && hora <18){
        //BOA TARDE
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        //BOA NOITE
        img.src = 'noite.png'
        document.body.style.background = '#0b0b5cc5'
    }
    
}
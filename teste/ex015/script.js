function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    if(fano.value.length == 0 || fano > ano){
        alert('[ERRO] Dados invalidos.')
    }else{
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var res = document.querySelector('div#res')
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var genero = ''
        if(sex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 11){
                img.setAttribute('src','foto-bebe-m.png')
            }
            else if(idade < 23){
                img.setAttribute('src','foto-jovem-m.png')
            }else if(idade < 50){
                img.setAttribute('src','foto-adulto-m.png')
            }else{
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        }else{
            genero = 'Mulher'
            if(idade >= 0 && idade < 11){
                img.setAttribute('src','foto-bebe-f.png')
            }
            else if(idade < 23){
                img.setAttribute('src','foto-jovem-f.png')
            }else if(idade < 50){
                img.setAttribute('src','foto-adulto-f.png')
            }else{
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.innerHTML = `Encontramos ${genero} com ${idade} anos`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}
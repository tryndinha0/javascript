//var agora = new Date()
//var hora = agora.getHours()
agora = 


hora = Number.parseInt(agora)

console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12 && hora > 5){
    console.log('Bom dia!')
}if (hora >= 12 && hora <18) 
    console.log('Boa Tarde!')
if (hora >= 0 && hora < 6){
   console.log('Boa Madrugada!')
}if (hora >= 18 && hora <= 23){
 console.log('Boa Noite!')
}if (hora < -1 || hora > 24){ 
 console.log('Horário Inválido')}



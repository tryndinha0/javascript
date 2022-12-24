function clicou() {
   var valor = Number(prompt('Digite uma temperatura em °C (Celsius)'))
   var res = document.querySelector('p#res')
   var kelvin = valor + 273
   var far = (valor * 9/5) + 32
   res.innerHTML = `<h1>A temperatura de ${valor}, corresponde a...</h1>`
   res.innerHTML += `<p>${kelvin}°K (Kelvin)</p>`
   res.innerHTML += `<p>${far}°F (Fahrenheit)</p>`
   
}
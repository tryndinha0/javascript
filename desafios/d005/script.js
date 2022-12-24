function clicou() {
   var valor = Number(prompt('Digite uma distância em metros (m)'))
   var res = document.querySelector('p#res')
   res.innerHTML = `<h1>A distância de ${valor} metros, corresponde...</h1>`
   res.innerHTML += `<p>${valor/1000} quilômetros (Km)</p>`
   res.innerHTML += `<p>${valor/100} hectômetros (Hm)</p>`
   res.innerHTML += `<p>${valor/10} decâmetros (Dam)</p>`
   res.innerHTML += `<p>${valor*10} decímetros (dm)</p>`
   res.innerHTML += `<p>${valor*100} centímetros (cm)</p>`
   res.innerHTML += `<p>${valor*1000} milímetros (mm)</p>`
}
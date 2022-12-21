var valores = [8, 1, 7, 4, 2, 9]

/*for(pos = 0; pos <valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

for(var pos /*a variavel pos recebe as keys */  in valores /*Da variável valores*/) {
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}
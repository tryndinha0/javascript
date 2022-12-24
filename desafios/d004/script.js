function clicou() {
    var produto = prompt('Que produto você está comprando?')
    var preço = Number(prompt(`Quanto custa ${produto} que você está precisando?`))
    var pago = Number(prompt(`Qual foi o valor que você deu para pagar ${produto}?`))
    
    if (preço > pago) {
        alert(`Pague o Restante!`) //o condicional não foi incluso na proposta de exercício.
    } else {
        var troco = pago - preço
        alert(`Você comprou ${produto} que custou R$ ${preço}. Deu R$ ${pago} em dinheiro e vai receber ${troco} de troco. Volte sempre!`)
    }


}
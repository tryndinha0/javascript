function tabuada() {
    var num = document.querySelector('input#txtn')
    var tab = document.querySelector('select#seltab')

    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        tab.innerHTML = ''
        var n = Number(num.value)
        for (c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)

        }

    }
} 
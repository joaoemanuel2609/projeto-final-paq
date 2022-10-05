function inserirProduto() {
    var valorProduto = 0
    var lista = document.getElementById("produtos")
    var Produto = document.getElementById("nomeProduto")
    var checkbox = document.createElement("input")
    var linha = document.createElement('li')
    checkbox.setAttribute('type', "checkbox")
    checkbox.addEventListener("click", function () {
        var valorCompras = document.getElementById("valorCompras")
        if (checkbox.checked) {
            valorProduto = parseFloat(prompt('adicionar valor'))
            if (!valorProduto) {
                valorProduto = 0
            }
            console.log(parseFloat(valorProduto))

            valorCompras.innerHTML = parseFloat(valorCompras.innerHTML) + valorProduto
        } else {
            valorCompras.innerHTML = parseFloat(valorCompras.innerHTML) - valorProduto
            valorProduto = 0
        }
    })
    var spanProduto = document.createElement('span')
    spanProduto.innerHTML = Produto.value
    var btnExcluir = document.createElement('input')
    btnExcluir.setAttribute('type', "button")
    btnExcluir.setAttribute("value", "x")
    btnExcluir.addEventListener('click', function () {
        linha.remove()
        valorCompras.innerHTML = parseFloat(valorCompras.innerHTML) - valorProduto

    })
    lista.append(linha)
    linha.append(checkbox, spanProduto, btnExcluir)
}

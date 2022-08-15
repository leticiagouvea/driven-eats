let food;
let drink;
let candy;

let foodname, drinkname, candyname, foodprice, drinkprice, candyprice;

function selecionarprato(pratoSelecionado) {
    const apertou = document.querySelector('.pratos .borda');

    food = pratoSelecionado;
    foodname = food.querySelector('.food-name').innerHTML;
    foodprice = food.querySelector('.food-price').innerHTML;

    if (apertou !== null) {
    apertou.classList.remove('borda')
    }
    pratoSelecionado.classList.add('borda');

    finalizarPedido();
}

function selecionarbebida(bebidaSelecionada) {
    const apertou = document.querySelector('.bebidas .borda');

    drink = bebidaSelecionada;
    drinkname = drink.querySelector('.drink-name').innerHTML;
    drinkprice = drink.querySelector('.drink-price').innerHTML;

    if (apertou !== null) {
    apertou.classList.remove('borda')
    }
    bebidaSelecionada.classList.add('borda');

    finalizarPedido();
}

function selecionarsobremesa(sobremesaSelecionada) {
    const apertou = document.querySelector('.sobremesas .borda');

    candy = sobremesaSelecionada;
    candyname = candy.querySelector('.candy-name').innerHTML;
    candyprice = candy.querySelector('.candy-price').innerHTML;

    if (apertou !== null) {
    apertou.classList.remove('borda')
    }
    sobremesaSelecionada.classList.add('borda');

    finalizarPedido();
}

function checkativado(elemento) {
    let check = elemento.querySelector('.categoria1 .checkicon')
    let ativado = document.querySelector('.categoria1 .ativado')
    if (ativado !== null) {
        ativado.classList.remove('ativado')
    }
    check.classList.add('ativado')
}

function checkativado2(elemento) {
    let check = elemento.querySelector('.categoria2 .checkicon')
    let ativado = document.querySelector('.categoria2 .ativado')
    if (ativado !== null) {
        ativado.classList.remove('ativado')
    }
    check.classList.add('ativado')
}

function checkativado3(elemento) {
    let check = elemento.querySelector('.categoria3 .checkicon')
    let ativado = document.querySelector('.categoria3 .ativado')
    if (ativado !== null) {
        ativado.classList.remove('ativado')
    }
    check.classList.add('ativado')
}

function finalizarPedido() {
    
    if (food && drink && candy) {

        let botao = document.querySelector('.botaoconcluir')
        let p = document.querySelector('.botaoconcluir p')
        botao.classList.add('botaoselecionado')

        let price1 = Number(foodprice.substr(3))
        let price2 = Number(drinkprice.substr(3))
        let price3 = Number(candyprice.substr(3))
        let valorTotal = price1 + price2 + price3

        let message = encodeURIComponent(`Olá, gostaria de fazer o pedido:
        - Prato: ${foodname}
        - Bebida: ${drinkname}
        - Sobremesa: ${candyname}
        Total: R$ ${valorTotal.toFixed(2)}`)

        p.innerHTML = `<a href="https://wa.me/5521984054853?text=${message}">Concluir pedido</a>`
    }
}
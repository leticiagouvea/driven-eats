function selecionarprato(pratoSelecionado) {
    const apertou = document.querySelector('.pratos .borda');
    if (apertou !== null) {
    apertou.classList.remove('borda')
    }
    pratoSelecionado.classList.add('borda');
}

function selecionarbebida(bebidaSelecionada) {
    const apertou = document.querySelector('.bebidas .borda');
    if (apertou !== null) {
    apertou.classList.remove('borda')
    }
    bebidaSelecionada.classList.add('borda');
}

function selecionarsobremesa(sobremesaSelecionada) {
    const apertou = document.querySelector('.sobremesas .borda');
    if (apertou !== null) {
    apertou.classList.remove('borda')
    }
    sobremesaSelecionada.classList.add('borda');
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
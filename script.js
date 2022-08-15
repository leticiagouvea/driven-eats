function selecionarprato(pratoSelecionado) {
    const apertou = document.querySelector('.pratos .borda');
    if (apertou !== null) {
    apertou.classList.remove('borda')
    }
    pratoSelecionado.classList.add('borda');
}

function selecionarbebida(bebidaSelecionada) {
    const apertou = document.querySelector('.bebidas .borda');
    if (apertou !== null ) {
    apertou.classList.remove('borda')
    }
    bebidaSelecionada.classList.add('borda');
}

function selecionarsobremesa(sobremesaSelecionada) {
    const apertou = document.querySelector('.sobremesas .borda');
    if (apertou !== null ) {
    apertou.classList.remove('borda')
    }
    sobremesaSelecionada.classList.add('borda');
}
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
var botaoAtualizar = document.getElementById('atualizar-saldo');
var botaoLimpar = document.getElementById('limpar-saldo');
var soma = document.getElementById('soma');
var campoSaldo = document.getElementById('campo-saldo');
var valorCampo = 0;
function somarAoSaldo(soma, n) {
    valorCampo = n;
    if (valorCampo == 0) {
        valorCampo = parseInt(soma);
    }
    else {
        valorCampo = parseInt(soma) + n;
    }
    campoSaldo.innerHTML = "".concat(valorCampo);
}
function limparSaldo() {
    valorCampo = 0;
    campoSaldo.innerHTML = '';
}
botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(soma.value, valorCampo);
});
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */ 

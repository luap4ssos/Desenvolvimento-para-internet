let ipPrimeiroValor = document.querySelector("#ipPrimeiroValor");
let ipSegundoValor = document.querySelector("#ipSegundoValor");
let btValorMaior = document.querySelector("#btValorMaior");

function RetornarValorMaior(){
    let valor1 = Number(ipPrimeiroValor.value);
    let valor2 = Number(ipSegundoValor.value);
    if(valor1 > valor2) {
        alert (valor1);
    }
    else{
        alert (valor2);
    }
}

btValorMaior.onclick = function(){
    RetornarValorMaior();
}
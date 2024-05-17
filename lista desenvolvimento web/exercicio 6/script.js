let ipPrimeiroValor = document.querySelector("#ipPrimeiroValor");
let ipSegundoValor = document.querySelector("#ipSegundoValor");
let ipTerceiroValor = document.querySelector("#ipTerceiroValor");
let ipQuartoValor = document.querySelector("#ipQuartoValor");
let btValorMenor = document.querySelector("#btValorMenor");

function RetornarValorMenor(){
    let valor1 = Number(ipPrimeiroValor.value);
    let valor2 = Number(ipSegundoValor.value);
    let valor3 = Number(ipTerceiroValor.value);
    let valor4 = Number(ipQuartoValor.value);
    if(valor1 < valor2, valor1 < valor3, valor1 < valor4) {
        alert (valor1);
    }
    else if(valor2 < valor1, valor2 < valor3, valor2 < valor4) {
        alert (valor2);
    }
    else if(valor3 < valor1, valor3 < valor2, valor3 < valor4) {
        alert (valor3);
    }
    else{
        alert (valor4);
    }
}

btValorMenor.onclick = function(){
    RetornarValorMenor();
}
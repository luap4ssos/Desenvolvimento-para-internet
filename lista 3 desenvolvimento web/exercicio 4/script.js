let ipnome = document.querySelector("#ipnome");
let ipidade = document.querySelector("#ipidade");
let btCalcular = document.querySelector("#btCalcular");
let h3resultado = document.querySelector("#h3resultado");

function CalcularDias(){
    let escrita = ipnome.value;
    let valor = Number(ipidade.value);

    let resultado = valor * 365;

    h3resultado.innerHTML =
    +escrita+", voce ja viveu "+resultado+" dias!";
}

btCalcular.onclick = function(){
    CalcularDias();
}
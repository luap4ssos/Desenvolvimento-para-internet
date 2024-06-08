let ipquilo = document.querySelector("#ipquilo");
let btCalcular = document.querySelector("#btCalcular");
let h3resultado = document.querySelector("#h3resultado");

function CalcularPeso(){
    let valor = Number(ipquilo.value);

    let resultado = valor * 12;

    h3resultado.innerHTML =
    "Valor a pagar: R$"+resultado;
}

btCalcular.onclick = function(){
    CalcularPeso();
}
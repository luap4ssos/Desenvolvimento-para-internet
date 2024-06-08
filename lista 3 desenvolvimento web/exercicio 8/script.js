let ipPequena = document.querySelector("#ipPequena");
let ipMedia = document.querySelector("#ipMedia");
let ipGrande = document.querySelector("#ipGrande");
let btCalcular = document.querySelector("#btCalcular");
let h3resultado = document.querySelector("#h3resultado");

function Calcularvalor(){
    let valor1 = Number(ipPequena.value);
    let valor2 = Number(ipMedia.value);
    let valor3 = Number(ipGrande.value);

    let resultado = (valor1 * 10) + (valor2 * 12) + (valor3 * 15);

    h3resultado.innerHTML =
    "Valor a pagar: R$"+resultado;
}

btCalcular.onclick = function(){
    Calcularvalor();
}
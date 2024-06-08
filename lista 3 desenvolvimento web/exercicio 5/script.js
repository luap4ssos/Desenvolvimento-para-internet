let ipReaisGasolina = document.querySelector("#ipReaisGasolina");
let ipValorGasolina = document.querySelector("#ipValorGasolina");
let btCalcular = document.querySelector("#btCalcular");
let h3resultado = document.querySelector("#h3resultado");

function CalcularGasolina(){
    let valor1 = Number(ipReaisGasolina.value);
    let valor2 = Number(ipValorGasolina.value);

    let resultado = valor1 / valor2;

    h3resultado.innerHTML =
    "Voce conseguiu colocar "+resultado+" litros no carro!"
}

btCalcular.onclick = function(){
    CalcularGasolina();
}
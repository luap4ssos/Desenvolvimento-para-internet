let ipValorPago = document.querySelector("#ipValorPago");
let ipPreco = document.querySelector("#ipPreco");
let btSubtrair = document.querySelector("#btSubtrair");
let h3resultado = document.querySelector("#h3resultado");

function subtrairValores(){
    let valor1 = Number(ipValorPago.value);
    let valor2 = Number(ipPreco.value);
    let resultado = valor1 - valor2;
    h3resultado.textContent = String (resultado);
}

btSubtrair.onclick = function(){
    subtrairValores();
}
let ipValorQuilo = document.querySelector("#ipValorQuilo");
let ipQuiloConsumido = document.querySelector("#ipQuiloConsumido");
let btMultiplicar = document.querySelector("#btMultiplicar");
let h2resultado = document.querySelector("#h2resultado");

function multiplicarValores(){
    let valor1 = Number(ipValorQuilo.value);
    let valor2 = Number(ipQuiloConsumido.value);
    let resultado = valor1 * valor2;
    h2resultado.textContent = String (resultado);
}

btMultiplicar.onclick = function(){
    multiplicarValores();
}
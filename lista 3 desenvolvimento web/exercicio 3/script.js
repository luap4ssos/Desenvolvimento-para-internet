let ipPaes = document.querySelector("#ipPaes");
let ipBroas = document.querySelector("#ipBroas");
let btCalcular = document.querySelector("#btCalcular");
let h3resultado = document.querySelector("#h3resultado");

function CalcularValores(){
    let valor1 = Number(ipPaes.value);
    let valor2 = Number(ipBroas.value);

    let resultado1 = valor1 * 0.12;
    let resultado2 = valor2 * 1.50;

    let valortotal = resultado1 + resultado2;

    let valorguardar = valortotal * 0.1;

    h3resultado.innerHTML = 
    "Valor a ser guardado: "+valorguardar;
}

btCalcular.onclick = function(){
    CalcularValores();
}
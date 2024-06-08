let ipdia = document.querySelector("#ipdia");
let ipmes = document.querySelector("#ipmes");
let btCalcular = document.querySelector("#btCalcular");
let h3resultado = document.querySelector("#h3resultado");

function Calculardias(){
    let valor1 = Number(ipdia.value);
    let valor2 = Number(ipmes.value);

    let resultado = ((valor2 * 30) - 30) + valor1;

    h3resultado.innerHTML =
    "Se passaram "+resultado+" dias!"
}

btCalcular.onclick = function(){
    Calculardias();
}
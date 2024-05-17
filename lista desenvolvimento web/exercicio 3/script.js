let ipSaldo = document.querySelector("#ipSaldo");
let btReajuste = document.querySelector("#btReajuste");
let h2Resultado = document.querySelector("#h2Resultado");

function Reajuste(){
    let valor1 = Number(ipSaldo.value);
    let resultado = valor1 * 0.01;
    let resultado2 = valor1 + resultado;
    h2Resultado.textContent = String(resultado2);
}

btReajuste.onclick = function(){
    Reajuste();
}
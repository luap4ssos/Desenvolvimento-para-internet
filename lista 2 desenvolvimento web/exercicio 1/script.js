let ipValorAtual = document.querySelector("#ipValorAtual");
let btCalcularAumentos = document.querySelector("#btCalcularAumentos");
let h3Resultado = document.querySelector("#h3Resultado");

function Calcular(){
    let valor1 = Number(ipValorAtual.value);

    let resultado1 = valor1 * 0.01;
    let resultado2 = valor1 + resultado1;

    let resultado3 = valor1 * 0.02;
    let resultado4 = valor1 + resultado3;

    let resultado5 = valor1 * 0.05;
    let resultado6 = valor1 + resultado5;

    let resultado7 = valor1 * 0.10;
    let resultado8 = valor1 + resultado7;

    h3Resultado.innerHTML =
    "Aumento de 1% = "+resultado2+
    " Aumento de 2% = "+resultado4+
    " Aumento de 5% = "+resultado6+
    " Aumento de 10% = "+resultado8;
}

btCalcularAumentos.onclick = function(){
    Calcular();
}
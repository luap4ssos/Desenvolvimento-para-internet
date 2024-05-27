let ipQuantidadeDePessoas = document.querySelector("#ipQuantidadeDePessoas");
let btCalcularOvoQueijo = document.querySelector("#btCalcularOvoQueijo");
let h3resultado = document.querySelector("#h3resultado");

function CalcularQuantidadeEGramas(){
    let valor1 = Number(ipQuantidadeDePessoas.value);
    let ovos = valor1 * 2;
    let queijo = valor1 * 50;

    h3resultado.innerHTML = 
    "Quantidade de ovos: "+ovos+
    " Gramas de queijo: "+queijo;
}

btCalcularOvoQueijo.onclick = function(){
    CalcularQuantidadeEGramas();
}
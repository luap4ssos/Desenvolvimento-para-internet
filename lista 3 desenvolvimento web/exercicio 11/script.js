let ipsalario = document.querySelector("#ipsalario");
let btCalcular = document.querySelector("#btCalcular");
let h3resultado = document.querySelector("#h3resultado");

function CalcularSalario(){
    let valor = Number(ipsalario.value);

    let resultado = valor * 0.15;
    let aumento = valor + resultado;

    let resultado2 = valor * 0.08;
    let desconto = valor - resultado2;

    h3resultado.innerHTML =
    "Salario inicial: "+valor+
    " Salario com aumento de 15%: "+aumento+
    " Salario com desconto de 8%: "+desconto;
}

btCalcular.onclick = function(){
    CalcularSalario();
}
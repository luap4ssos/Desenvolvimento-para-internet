let ipvalor1 = document.querySelector("#ipvalor1");
let ipvalor2 = document.querySelector("#ipvalor2");
let btCalcular = document.querySelector("#btCalcular");
let h3resultado = document.querySelector("#h3resultado");

function PrincipaisOperacoes(){
    let valor1 = Number(ipvalor1.value);
    let valor2 = Number(ipvalor2.value);
    let soma = valor1 + valor2;
    let subtracao = valor1 - valor2;
    let multiplicacao = valor1 * valor2;
    let divisao = valor1 / valor2;

    h3resultado.innerHTML =
    "Soma: "+soma+ "<br>"+
    "Subtração: "+subtracao+ "<br>"+
    "Multiplicação: "+multiplicacao+ "<br>"+
    "Divisão: "+divisao+ "<br>"

}

btCalcular.onclick = function(){
    PrincipaisOperacoes();
}
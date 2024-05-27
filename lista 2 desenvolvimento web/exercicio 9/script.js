let ipNAlunos = document.querySelector("#ipNAlunos");
let ipturmas = document.querySelector("#ipturmas");
let btCalcular = document.querySelector("#btCalcular");
let h3resultado = document.querySelector("#h3resultado");

function Calculartudo(){
    let valor1 = Number(ipNAlunos);
    let valor2 = Number(ipturmas);
    let dividir = Number(valor1 / valor2);
    let resto = Number(valor1 % valor2);

    h3resultado.innerHTML = 
    "Quantidade de pessoas por sala: "+dividir+
    " Quantas pessoas ficarao sem turma: "+resto;
}

btCalcular.onclick = function(){
    Calculartudo();
}
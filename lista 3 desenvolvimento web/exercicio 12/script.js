let ipNumero = document.querySelector("#ipNumero");
let btVerificar = document.querySelector("#btVerificar");
let h3resultado = document.querySelector("#h3resultado");

function VerificarNumero(){
    let valor = Number(ipNumero.value);

    let centena = valor / 100;
    let numero1 = valor % 100;
    let dezena = numero1 / 10;
    let numero2 = numero1 % 10;
    let unidade = numero2;

    h3resultado.innerHTML =
    "CENTENA: "+centena+
    " DEZENA: "+dezena+
    " UNIDADE: "+unidade;
}

btVerificar.onclick = function(){
    VerificarNumero();
}
let ipValor = document.querySelector("#ipValor");
let btCalcular = document.querySelector("#btCalcular");
let h3resultado = document.querySelector("#h3resultado");

function CalcularConta(){
    let valor = Number(ipValor.value);

    let carlos = Math.trunc (valor / 3);
    let andre = Math.trunc (valor / 3);
    let felipe = valor - (carlos / andre);

    h3resultado.innerHTML =
    "Carlos devara pagar: R$"+carlos+
    " Andre devera pagar: R$"+andre+
    " Felipe devera pagar: R$"+felipe;
}

btCalcular.onclick = function(){
    CalcularConta();
}
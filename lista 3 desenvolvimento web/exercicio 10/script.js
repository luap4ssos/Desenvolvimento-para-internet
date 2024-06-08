let ipDias = document.querySelector("#ipDias");
let btCalcular = document.querySelector("#btCalcular");
let h3resultado = document.querySelector("#h3resultado");

function CalcularTempo(){
    let tempo = Number(ipDias.value);

    let ano = tempo / 365
    let mes = tempo / 30
    let dia = tempo;

    h3resultado.innerHTML =
    "Tempo sem acidentes na fabrica: "+ano+" anos, "+mes+" meses e "+dia+" dias.";
}

btCalcular.onclick = function(){
    CalcularTempo();
}
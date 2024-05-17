let ipvalor1 = document.querySelector("#ipvalor1");
let ipvalor2 = document.querySelector("#ipvalor2");
let ipvalor3 = document.querySelector("#ipvalor3");
let btcalcular = document.querySelector("#btcalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcular(){
    let vlr1 = Number(ipvalor1.value);
    let vlr2 = Number(ipvalor2.value);
    let vlr3 = Number(ipvalor3.value);
    let mediaAritmetica = (vlr1 + vlr2 + vlr3) / 3;

    let somaValoresPesos = (vlr1 * 3) + (vlr2 * 2) + (vlr3 * 5);

    let somaPesos = 3 + 2 + 5;

    let mediaPonderada = somaValoresPesos / somaPesos;

    let somaMedias = mediaAritmetica + mediaPonderada;

    let mediaMedias = somaMedias / 2;

    h3Resultado.innerHTML = 
    "Media Aritmetica: "+mediaAritmetica+
    " Media Ponderada: "+mediaPonderada+
    " Soma das Medias: "+somaMedias+
    " Media das Medias: "+mediaMedias;
}

btcalcular.onclick = function(){
    calcular();
}


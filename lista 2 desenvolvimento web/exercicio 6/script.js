let ipNota = document.querySelector("#ipNota");
let btVerificar = document.querySelector("#btVerificar");

function verificarMedia(){
    let valor = ipNota.value;
    if(valor > 6){
        alert("aprovado");
    }
    else if(valor <= 6, valor > 4){
        alert("precisa fazer prova substitutiva");
    }
    else if(valor < 4){
        alert("reprovado");
    }
}

btVerificar.onclick = function(){
    verificarMedia();
}
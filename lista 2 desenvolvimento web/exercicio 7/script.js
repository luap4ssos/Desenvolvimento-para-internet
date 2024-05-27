let ipNumero1 = document.querySelector("#ipNumero1");
let ipNumero2 = document.querySelector("#ipNumero2");
let btVerificar = document.querySelector("#btVerificar");

function VerificarseMaior(){
    let valor1 = Number(ipNumero1.value);
    let valor2 = Number(ipNumero2.value);

    if(valor1 > valor2){
        alert("o primeiro numero é maior")
    }
    else if(valor1 < valor2){
        alert("o primeiro numero é menor");
    }
    else if(valor1 = valor2){
        alert("o primeiro numero é igual ao segundo");
    }
}

btVerificar.onclick = function(){
    VerificarseMaior();
}
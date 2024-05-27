let ipNumero = document.querySelector("#ipNumero");
let btVerificar = document.querySelector("#btVerificar");

function VerificarseImparouPar(){
    let valor = Number(ipNumero.value);
    if(valor % 2 == 0){
        alert("Este numero é par!")
    }
    else{
        alert("Este numero é impar!")
    }
}

btVerificar.onclick = function(){
    VerificarseImparouPar();
}
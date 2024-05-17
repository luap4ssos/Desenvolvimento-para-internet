let ipValor = document.querySelector("#ipValor");
let btVerificar = document.querySelector("#btVerificar");

function VerificarImpar(){
    let valor = Number(ipValor.value);
    if(valor % 2 == 0){
        alert("Este numero nao e impar!");
    }
    else{
        alert("Este numero e impar!");
    }
}

btVerificar.onclick = function(){
    VerificarImpar();
}
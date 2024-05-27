let ipPessoa1 = document.querySelector("#ipPessoa1");
let ipPessoa2 = document.querySelector("#ipPessoa2");
let ipPessoa3 = document.querySelector("#ipPessoa3");
let ipano1 = document.querySelector("#ipano1");
let ipano2 = document.querySelector("#ipano2");
let ipano3 = document.querySelector("#ipano3");
let btVerificar = document.querySelector("#btVerificar");
let h3resultado = document.querySelector("#h3resultado");

function VerificarIdades(){
    let valor1 = Number(ipano1.value);
    let valor2 = Number(ipano2.value);
    let valor3 = Number(ipano3.value);
    let escrita1 = ipPessoa1.value;
    let escrita2 = ipPessoa2.value;
    let escrita3 = ipPessoa3.value;

    if(valor1 < valor2, valor1 < valor3){
        nome1 = escrita1
    }
    else if(valor2 < valor1, valor2 < valor3){
        nome2 = escrita2
    }
    else{
        nome3 = escrita3
    }

    h3resultado.innerHTML =
    "Pessoa mais velha: "+nome1+
    " Segunda mais velha: "+nome2+
    " Mais nova: "+nome3;
}

btVerificar.onclick = function(){
    VerificarIdades();
}
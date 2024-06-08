let ipX1 = document.querySelector("#ipX1");
let ipY1 = document.querySelector("#ipY1");
let ipX2 = document.querySelector("#ipX2");
let ipY2 = document.querySelector("#ipY2");
let btCalcular = document.querySelector("#btCalcular");
let h3resultado = document.querySelector("#h3resultado");

function CalcularDis(){
    let x1 = Number(ipX1.value);
    let y1 = Number(ipY1.value);
    let x2 = Number(ipX2.value);
    let y2 = Number(ipY2.value);

    let subtracaox = x2 - x1;
    let subtracaoy = y2 - y1;
    let quadradox = subtracaox * subtracaox;
    let quadradoy = subtracaoy * subtracaoy;
    let soma = quadradox + quadradoy;
    let raiz = Math.sqrt(soma);

    h3resultado.innerHTML = 
    "Distancia entre os pontos: "+raiz;

}

btCalcular.onclick = function(){
    CalcularDis();
}
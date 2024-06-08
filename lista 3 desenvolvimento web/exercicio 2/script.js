let ipcavalos = document.querySelector("#ipcavalos");
let btCalcular = document.querySelector("#btCalcular");
let h3resultado = document.querySelector("#h3resultado");

function CalcularFerraduras(){
    let valor = Number(ipcavalos.value);
    let resultado = valor * 4;

    h3resultado.innerHTML = 
    "Quantidade de ferraduras necessarias para equipar todos os cavalos: "+resultado;
}

btCalcular.onclick = function(){
    CalcularFerraduras();
}
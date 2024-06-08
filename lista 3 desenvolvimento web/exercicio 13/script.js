let ipraio = document.querySelector("#ipraio");
let btCalcular = document.querySelector("#btCalcular");
let h3resultado = document.querySelector("#h3resultado");

function CalcularArea(){
    let valor = Number(ipraio.value);

    let area = 3.14 * (valor * valor);

    h3resultado.innerHTML = 
    "Area da pizza: "+area;
}

btCalcular.onclick = function(){
    CalcularArea();
}
let ipbase = document.querySelector("#ipbase");
let ipaltura = document.querySelector("#ipaltura");
let btcalcular = document.querySelector("#btcalcular");
let h3resultado = document.querySelector("#h3resultado");

function CalcularArea(){
    let valor1 = Number(ipbase.value);
    let valor2 = Number(ipaltura.value);
    let area = valor1 * valor2;

    h3resultado.innerHTML =
    "Area do terreno: "+area;
}

btcalcular.onclick = function(){
    CalcularArea();
}
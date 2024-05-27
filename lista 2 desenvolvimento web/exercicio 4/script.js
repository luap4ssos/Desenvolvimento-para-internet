let ipSabores = document.querySelector("#ipSabores");
let ipRefri = document.querySelector("#ipRefri");
let btCalcular = document.querySelector("#btCalcular");
let h3resultado = document.querySelector("#h3resultado");

function CalcularValor(){
    let valor1 = Number(ipRefri.value);
    let escrita = ipSabores.value;

    let refris = valor1 * 7;
    let sabores = escrita;
    let total = refris + 48;

    h3resultado.innerHTML =
    "Sabores de Pizza: "+sabores+
    " Valor do refri: "+refris+
    " Valor total: "+total;
}

btCalcular.onclick = function(){
    CalcularValor();
}
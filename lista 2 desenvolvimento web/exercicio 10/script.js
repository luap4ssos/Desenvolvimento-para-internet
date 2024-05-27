let ipValorVendido = document.querySelector("#ipValorVendido");
let ipMeta = document.querySelector("#ipMeta");
let ipMetaMinimaMes = document.querySelector("#ipMetaMinimaMes");
let btCalcular = document.querySelector("#btCalcular");
let h3resultado = document.querySelector("#h3resultado");

function CalcularTudo(){
    let valor1 = Number(ipValorVendido.value);
    let valor2 = Number(ipMeta.value);
    let valor3 = Number(ipMetaMinimaMes.value);
    
    if(valor1 >= valor2){
        alert("Atingiu a meta!")
    }
    else if(valor1 >= valor3){
        alert("Atingiu a meta minima!")
    }
    else if(valor1 < valor2, valor1 < valor3){
        alert("Nao atingiu nenhuma meta.")
    }

    let PercentualdaMeta = valor1 / valor2;
    let PercentualdaMetaMinima = valor1 / valor3;

    h3resultado.innerHTML = 
    "Percentual de atingimento de meta: "+PercentualdaMeta+
    " Percentual de atingimento de meta minima: "+PercentualdaMetaMinima;
}

btCalcular.onclick = function(){
    CalcularTudo();
}
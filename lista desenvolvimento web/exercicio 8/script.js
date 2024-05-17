let ipCodigo = document.querySelector("#ipCodigo");
let btRetornar = document.querySelector("#btRetornar");

function RetornarNome(){
    let codigo = Number(ipCodigo.value);
    if(codigo == 0o1){
        alert("Parafuso");
    }
    else if(codigo == 0o2){
        alert("Porca");
    }
    else if(codigo == 0o3){
        alert("Prego");
    }
    else{
        alert("Diversos");
    }
}

btRetornar.onclick = function(){
    RetornarNome();
}
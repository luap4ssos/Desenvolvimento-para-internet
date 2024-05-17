let ipMedia = document.querySelector("#ipMedia");
let btVerificar = document.querySelector("#btVerificar");

function VerificarMedia(){
    let media = Number(ipMedia.value);
    if(media >= 6.0) {
        alert("Aluno Aprovado! :D");
    }else{
        alert("Reprovado! :(");
    }
}

btVerificar.onclick = function(){
    VerificarMedia();
}
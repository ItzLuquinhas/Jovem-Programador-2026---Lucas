function salvar(){
    let nome_usuario =
        document.getElementById("nome_usuario").value;
    localStorage.setItem("nome_usuario",nome_usuario);
    alert("Nome salvo!")
}

window.onload = function(){
    let nome_usuario =
        localStorage.getItem("nome_usuario");
    
    if(nome_usuario){
        document.getElementById("nome_usuario").value = nome_usuario;
    }
}

function remover(){
    let nome_usuario =
        localStorage.removeItem("nome_usuario");

    if(nome_usuario){
        document.getElementById("nome_usuario").value = nome_usuario;
    }
    alert("Nome removido!")
}

navigator.geolocation.getCurrentPosition(
    mostrarPosicao
);
function mostrarPosicao(posicao){
    console.log(
        posicao.coords.latitude
    );

    console.log(
        posicao.coords.longitude
    );
}

function copiar(){
    navigator.clipboard.writeText(
        "Aprendendo HTML5!"
    );
}
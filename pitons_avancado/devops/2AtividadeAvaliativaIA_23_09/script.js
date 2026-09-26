function calcularMedia(){
    const x1 = Number(document.getElementById("x1").value);
    const x2 = Number(document.getElementById("x2").value);

    const media = (x1 + x2) /2;

    document.getElementById("resultado").innerHTML = "Sua média é: " + media;
}
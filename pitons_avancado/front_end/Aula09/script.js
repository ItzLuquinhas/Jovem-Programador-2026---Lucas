function mostrarPosicao(posicao){
    console.log(
    posicao.coords.latitude
    );
    
    console.log(
        posicao.coords.longitude
    );
}

async function copiar() {
    const img = document.getElementById("minhaImagem");

    const response = await fetch(img.src);
    const blob = await response.blob();

    await navigator.clipboard.write([
        new ClipboardItem({
            [blob.type]: blob
        })
    ]);

    console.log("Imagem copiada!");
}
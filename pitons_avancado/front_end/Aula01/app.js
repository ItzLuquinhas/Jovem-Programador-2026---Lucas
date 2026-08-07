function atualizarRelogio() {
    const elementoData = document.getElementById('data_atual');
    const agora = new Date();

    //formatar data e hora
    const formatoCompleto = agora.toLocaleString('pt-BR', {
        dateStyle: 'short',
        timeStyle: 'medium'
    });
    elementoData.textContent = formatoCompleto;
}
setInterval(atualizarRelogio,1000);
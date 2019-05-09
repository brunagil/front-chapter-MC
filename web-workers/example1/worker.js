onmessage = function (e) {
    console.log('Worker diz: Mensagem recebida do script principal');

    let resultado = e.data[0] * e.data[1]

    if (isNaN(resultado)) {
        postMessage('Por favor, escreva 2 números');
    } else {
        let resultadoWorker = 'Resultado: ' + resultado;
        console.log('Worker diz: Postando a mensagem novamente para o script principal');
        postMessage(resultadoWorker)

    }
}
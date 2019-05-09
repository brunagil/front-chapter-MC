if(window.Worker) {
    console.log('esse navegador tem workers!')
} else {
    console.log('esse navegador não tem workers!')
}

const primeiroNumero = document.getElementById("number1")
const segundoNumero = document.getElementById("number2")
const resultado = document.querySelector(".result")

if (window.Worker) {
    const meuWorker = new Worker('worker.js');

    primeiroNumero.onchange = function() {
        meuWorker.postMessage([primeiroNumero.value, segundoNumero.value]);
        console.log ('Mensagem enviada para o worker');
    }

    segundoNumero.onchange = function() {
        meuWorker.postMessage([primeiroNumero.value, segundoNumero.value]);
        console.log('Mensagem enviada para o worker')
    }

    meuWorker.onmessage = function(e) {
        resultado.textContent = e.data;
        console.log('Mensagem recebida do Worker');
    }
} else {
    console.log('Seu navegador não aceita web workers.')
}







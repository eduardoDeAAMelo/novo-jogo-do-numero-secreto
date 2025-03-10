let numeroLimite = 100;
let numeroSecreto = parseInt(Math.random()*numeroLimite)+1;
console.log(numeroSecreto);
let tentativas = 1;
let botaoResetar = document.getElementById('resetar');
botaoResetar.disabled = true;

function verificarChute(){
    let numeroDigitado = document.getElementById('numero__digitado').value;
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    if (numeroDigitado == numeroSecreto){
        subtitulo.innerHTML = `Parabéns você acertou! O número secreto era ${numeroSecreto} você acertou com ${tentativas} ${palavraTentativa}!`;
        limparCampo();
        botaoResetar.disabled = false;
    } else {
        if (numeroDigitado > numeroSecreto){
            subtitulo.innerHTML = "O seu chute foi maior que o número secreto";
            limparCampo();
        }
        if (numeroDigitado < numeroSecreto){
            subtitulo.innerHTML = "O seu chute foi menor que o número secreto";
            limparCampo();
        }
        if (numeroDigitado == 0){
            subtitulo.innerHTML = "Preencha o campo com um número";
            limparCampo();
        }
        
    }tentativas++;
    
}

function resetarJogo(){
    limparCampo();
    numeroLimite = 100;
    numeroSecreto = parseInt(Math.random()*numeroLimite);
    subtitulo.innerHTML = "Escolha um número entre 1 à 100";
    console.log(numeroSecreto);
    tentativas = 1;
    botaoResetar.disabled = true;

}

function limparCampo(){
    numeroDigitado = document.getElementById('numero__digitado');
    numeroDigitado.value='';
}
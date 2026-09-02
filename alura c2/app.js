let linstNumerSort = [];
let numeroLimite = 10;
let  = 3;
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
   let campo = document.querySelector(tag);
   campo.innerHTML = texto ;
   resposeveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagenInicial() {
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagenInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1','acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
       let mensagenTentativa = `você descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`; 
       exibirTextoNaTela('p',mensagenTentativa);
       document.getElementById('reiniciar').removeAttribute.apply('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'o numero secreto é menor!');
        } else {
            exibirTextoNaTela('p', 'o numero secreto é maior!');
        }
        tentativas++;
        limparCampo()
    }
}
function gerarNumeroAleatorio() {
 let numeroEscolido = parseInt(Math.random() * numeroLimite + 1 );
 let quantidadeDeElementoLista = linstNumerSort.length;

 if (quantidadeDeElementoLista == numeroLimite) {
    linstNumerSort = [];
 }
 if (linstNumerSort.includes(numeroEscolido)) {
    return gerarNumeroAleatorio();
 } else {
    linstNumerSort.push(numeroEscolido);
    console.log(linstNumerSort);
    return numeroEscolido;
 }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function ReiniciarJogo() {
numeroSecreto = gerarNumeroAleatorio();
limparCampo();
tentativas = 1;
exibirMensagenInicial();
document.getElementById('reiniciar').setAttribute('disabled',true);
}
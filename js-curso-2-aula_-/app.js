let listaDeNumerosSorteados = [];
let numeroLimite = 3;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.0});
}

function mensagemInicial(){
exibirTextoNaTela('h1', 'Bem vindo ao jogo do número secreto!');
exibirTextoNaTela('p', 'Escolha um número entre 1 a 10:');
}

mensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
    if (chute == numeroSecreto) {
        let mensagemtentativa = ('Parabéns, você descobriu o número secreto em '+tentativas+' '+palavratentativa+'!');
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', mensagemtentativa); 
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor!');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior!');
        }
            tentativas++
            limparcampo()
        }

    }

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt (Math.random() * numeroLimite + 1);
    let quantidadeDeElementoNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementoNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    } 
     if (listaDeNumerosSorteados.includes(numeroEscolhido)){
     return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
     }
}


function limparcampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparcampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);    
}
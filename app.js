//documento= pegar no html
// querySelector = selecionar algo especifico no html
//let titulo = document.querySelector("h1");
//titulo.innerHTML/*dentro do HTML*/ = "jogo do número";

//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = "Escolha um número entre 1 e 10";
let listaNumeroSorteados = [];
let limiteDeNumeros = 10 ;
let numeroAleatorio = gerarUmNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela("h1" , "jogo do número");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

exibirMensagemInicial();
// []= sempre usado para fazer uma lista
//variavel.length= tamanho daquela lista
//variavel.length -1 = sempre pega o ultimo elemento da lista
//.includes = verificar se ja esta na lista
//.push = coloca um elemento na lista sempre no final
//função:um trecho de codigo que é responsavel por determinada ação
function verificarChute() {
    let chute = document.querySelector("input").value;
    if (chute == numeroAleatorio){
       exibirTextoNaTela("h1", "você acertou!")
       let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
       let mensagemTentativas = `você descobriu o numero com ${tentativas} ${palavraTentativa}`;
       exibirTextoNaTela("p", mensagemTentativas);
       document.getElementById("reiniciar").removeAttribute("disabled");
       

    } else{
        if(chute > numeroAleatorio){
            exibirTextoNaTela("h1", "Você errou, que pena");
            exibirTextoNaTela("p", "tente denovo, o Numero é menor!!");
        } else{
            exibirTextoNaTela("h1", "Você errou, que pena");
            exibirTextoNaTela("p", "tente denovo, o Numero é maior!!");
        }
        tentativas++ ;
        limparCampo()

    }
}

function gerarUmNumeroAleatorio() {
     let numeroEscolhido = parseInt(Math.random() * limiteDeNumeros + 1) ;
     let quantidadeNumerosNaLista = listaNumeroSorteados.length;

    if(quantidadeNumerosNaLista == limiteDeNumeros){
        listaNumeroSorteados = [];
    }

     if (listaNumeroSorteados.includes(numeroEscolhido)){
       return gerarUmNumeroAleatorio();
     }else{
        listaNumeroSorteados.push(numeroEscolhido);
        console.log(listaNumeroSorteados);
        return numeroEscolhido ;
     }
}

function limparCampo(){
    chute= document.querySelector("input");
    chute.value = "";
}

function novojogo(){
    numeroAleatorio = gerarUmNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}
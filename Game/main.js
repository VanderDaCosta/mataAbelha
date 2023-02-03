var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 60;
var criaAbelhaTempo = 2000;

var nivel = window.location.search;
nivel = nivel.replace('?' , '');

if(nivel === 'facil'){
    //2000
    criaAbelhaTempo = 2000;
}else if(nivel === 'normal'){
    //1500
    criaAbelhaTempo = 1500;
}else if (nivel === 'dificil'){
    //1000
    criaAbelhaTempo = 1000;
}else if(nivel === 'impossivel'){
    //500
    criaAbelhaTempo = 500;
}

function dimensaoTela() {
    //recuperar a altura da pagina
    altura = window.innerHeight;
    //recuperar a largura da pagina
    largura = window.innerWidth;

    //console.log(altura, largura);
}

dimensaoTela();

var conometro = setInterval(function () {
    //introduzindo um texto dentro do SPAN
    tempo = tempo - 1;
    if (tempo < 0) {
        clearInterval(conometro);
        clearInterval(posicaoAbelha);
        window.location.href = 'vitoria.html';
    } else {
        document.getElementById('cronometro').innerHTML = tempo;
    }
}, 1000);


function posicaoAleatoria() {
    //vamso remover o inseto anterior(caso exista)
    if (document.getElementById('abelha')) {
        document.getElementById('abelha').remove();

        if (vidas > 4) {
            window.location.href = 'gameOver.html';
        } else {
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png';

            vidas++
        }
    }



    //Math.floor - faz o arredondamento do valor criado para baixo, para que evite as casas decimais
    //faz com que o valor gerado aleatoriamente va até o limite da largura/altura
    var posicaoXAbelha = Math.floor(Math.random() * largura) - 90;
    var posicaoYAbelha = Math.floor(Math.random() * altura) - 90;

    posicaoXAbelha = posicaoXAbelha < 0 ? 15 : posicaoXAbelha;
    posicaoYAbelha = posicaoYAbelha < 0 ? 15 : posicaoYAbelha;

    console.log("abelha: " + posicaoXAbelha, posicaoYAbelha);

    //criar o elemento HTML
    var abelha = document.createElement('img');
    abelha.src = 'imagens/abelha.png';
    abelha.className = tamanhoAleatorioAbelha() + ' ' + ladoAleatorio();
    abelha.style.left = posicaoXAbelha + 'px';
    abelha.style.top = posicaoYAbelha + 'px';
    abelha.style.position = 'absolute';
    abelha.id = 'abelha';

    abelha.onclick = function () {
        this.remove();
    }

    //adicionando um filho para o body
    document.body.appendChild(abelha);
}

function tamanhoAleatorioAbelha() {
    var classe = Math.floor(Math.random() * 4);
    switch (classe) {
        case 0:
            return 'abelha1';
        case 1:
            return 'abelha2';
        case 2:
            return 'abelha3';
        case 3:
            return 'abelha4';
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2);
    switch (classe) {
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';
    }
}
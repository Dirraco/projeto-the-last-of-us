/*
objetivo: quando clicarmos no botao temos que mostra
a imagem de fundo correspondente

passo 1: dar um jeito de pegar o elemento html dos botoes
passo 2: indentificar o clique do suário no botão
passo 3: desmarca o botão selecionado anterior
passo 4: marca o botão clicado como se estivesse selecionado
passo 5: esconder a imagen ativa de fundo
passo 6: fazer aparecer a imagen correspondente ao botão clicado
*/

const botoesCarrosseel = document.querySelectorAll('.botao');
console.log(botoesCarrosseel);
const imagens = document.querySelectorAll('.imagem');

botoesCarrosseel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        desativarBotaoSelecionado();

        selecionarBotaoCarrossel(botao);

        esconderImagemAtiva();

        mostraImagemDeFundo(indice);

    })
})
function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function mostraImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}


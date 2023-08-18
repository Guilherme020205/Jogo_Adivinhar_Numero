const numeroEscondido = document.getElementById('numeroEscondido');
const tentativas = document.getElementById('tentativas');
const Menor = document.getElementById('Menor');
const Maior = document.getElementById('Maior');
const atualizacao = document.getElementById('atualizacao');
const textoFimGame = document.getElementById('textoFimGame');
const boxInteracao = document.getElementById('boxInteracao');
const boxHeader = document.getElementById('boxHeader');

let numMenor = Menor;
let numMaior = Maior;
let NumTentativas = 10;

tentativas.textContent = NumTentativas;

const numeroDaSorte = Math.floor(Math.random() * 100) + 1;

boxInteracao.style.display = 'block';
boxHeader.style.display = 'block';

function reload() {
    window.location.reload(true)
}

function verificar() {
    textoFimGame.textContent = '';
    atualizacao.style.display = 'none';
    numMenor.style.display = 'none';
    numMaior.style.display = 'none';

    const campoDeTexto = Number(document.getElementById('campoDeTexto').value);
    if (NumTentativas !== 0) {
        if (campoDeTexto < numeroDaSorte) {
            numMaior.style.display = 'block';
            NumTentativas--
            tentativas.textContent = NumTentativas;


        } else if (campoDeTexto > numeroDaSorte) {
            numMenor.style.display = 'block';
            NumTentativas--
            tentativas.textContent = NumTentativas;

        } else {
            textoFimGame.textContent = `Parabéns você acertou em ${10 - Number(NumTentativas)} tentativas!`;
            numeroEscondido.textContent = numeroDaSorte;
            atualizacao.style.display = 'block';
            boxInteracao.style.display = 'none';
            boxHeader.style.display = 'none';
            setInterval(reload, 5000);
            ;
        }
    } else {
        textoFimGame.textContent = `Sua tentativas acabaram!`;
        numeroEscondido.textContent = numeroDaSorte;
        atualizacao.style.display = 'block';
        boxInteracao.style.display = 'none';
        boxHeader.style.display = 'none';
        setInterval(reload, 5000);
    }

    return false

}



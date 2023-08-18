const numeroEscondido = document.getElementById('numeroEscondido');
const tentativas = document.getElementById('tentativas');
const Menor = document.getElementById('Menor');
const Maior = document.getElementById('Maior');

let numMenor = Menor;
let numMaior = Maior;


let NumTentativas = 10
tentativas.textContent = NumTentativas;

const numeroDaSorte = Math.floor(Math.random() * 100) + 1;

function verificar() {

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
                alert(`Parabéns você acertou em ${Number(NumTentativas)} tentativas!`);
                alert(`Estamos recarregando a página para você`);
                window.location.reload(true);
            }
        } else {
            alert(`Sua tentativas acabaram!`);
            alert(`Estamos recarregando a página para você`);
            window.location.reload(true);
        }
    


    return false

}



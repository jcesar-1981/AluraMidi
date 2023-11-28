//Criação das funções

function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio)

//Tratamento de erros
    if (elemento != null && elemento.localName === 'audio'){
         elemento.play();        
    }
    else{
        console.log("Elemento não ou seletor inválido");
    }
}

//Criação de referência por meio de uma lista de teclas.
// uso de uma variável constante.

const listaDeteclas = document.querySelectorAll('.tecla');

//Estrutura de repetição para acesso à lista e a seus atributos

for (let contador = 0; contador < listaDeteclas.length; contador++) {

    const tecla = listaDeteclas[contador]
    const instrumento = tecla.classList[1];

//Template String

    const idAudio = `#som_${instrumento}`; //Uso de crase para o template e cifrão

    tecla.onclick = function () { //Função Anônima
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter' ||evento.code === 'NumpadEnter')
            tecla.classList.add('ativa');
        }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
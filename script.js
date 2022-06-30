function criarQuizz () {
    const conteiner = document.querySelector('.conteiner');
    conteiner.innerHTML = `
        <div class="criarInfoBasicas">
        <span>Comece pelo começo</span>
        <div>
            <input type="text" placeholder="Título do seu quizz">
            <input type="text" placeholder="URL da imagem do seu quizz">
            <input type="text" placeholder="Quantidade de perguntas do quizz">
            <input type="text" placeholder="Quantidade de níveis do quizz">
        </div>

        <button onclick="validarInfoBasica ()">Prosseguir pra criar perguntas</button>

        </div>
        `
        
}


function validarInfoBasica (){
    let input = document.querySelectorAll('.criarInfoBasicas input');
    let tituloValido;
     if (19 < input[0].value.length && input[0].value.length < 66){
        tituloValido = true;
    };


    let urlValida;
    for (let i =0; i < 8; i++){
        const url = "https://"
        if (input[1].value[i] !== url[i]){
            break;
        }
        if (i === 7){
            urlValida = true
        }
        
    }



    let quantidadePerguntasValida;
    if(input[2].value > 2){
        quantidadePerguntasValida = true
    }



    let quantidadeNiveisValido;
    if(input[3].value > 1){
        quantidadeNiveisValido = true
    }

    if(tituloValido && urlValida && quantidadePerguntasValida && quantidadeNiveisValido){
        console.log('td certo');
    }else{
        alert('Preencha os dados novamente.')
    }

}
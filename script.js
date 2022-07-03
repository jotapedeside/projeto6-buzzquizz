
const conteiner = document.querySelector('.conteiner');
let quantidadeNiveis;
let quantidadePerguntas;
let quizz = {
	title: "",
	image: "",
	questions: [],
	levels: []
}
let 
const regexHex = /^#[0-9A-F]{6}$/i;
const regexURL = /(https?):\/\/.*\.(jpg|jpeg|png|webp|avif|gif|svg)/;





function criarQuizz () {
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
    if (regexURL.test(input[1].value)){
        urlValida = true
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
        quizz.title = input[0].value;
        quizz.image = input[1].value;
        quantidadePerguntas = input[2].value;
        quantidadeNiveis = input[3].value;
        criarPerguntas();
    }else{
        alert('Preencha os dados novamente.')
    }


}

function criarPerguntas(){
    conteiner.innerHTML = `
        <div class="criarInfoPerguntas">
            <span>Crie suas perguntas</span>

            <ul>

            </ul>

            <button onclick="validarPerguntas ()">Prosseguir pra criar níveis</button>
        </div>
    ` 

    const ul = document.querySelector('ul');
    for (let i = 0; i < quantidadePerguntas; i++){
        ul.innerHTML += `
                <li class="conteinerPergunta"> 
                            
                    <div class="headerPergunta">
                        <span>Pergunta ${i + 1}</span>
                        <ion-icon name="open-outline" onclick="escondeInfo(this.parentNode.parentNode,this)"></ion-icon>
                    </div>
                    <div class="inputPergunta escondido">

                        <div class="textoPergunta">
                            <input type="text" name="title" placeholder="Texto da pergunta">
                            <input type="text" name="color" placeholder="Cor de fundo da pergunta">
                        </div>

                        <span>Resposta correta</span>
                        <div class="respCorreta">
                            <input type="text" placeholder="Resposta correta">
                            <input type="text" placeholder="URL da imagem">
                        </div>

                        <span>Respostas incorretas</span>
                        <div class="respIncorreta">
                            <div>
                                <input type="text" placeholder="Resposta incorreta 1">
                                <input type="text" placeholder="URL da imagem 1">
                            </div>
                            <div>
                                <input type="text" placeholder="Resposta incorreta 2">
                                <input type="text" placeholder="URL da imagem 2">
                            </div>
                            <div>
                                <input type="text" placeholder="Resposta incorreta 3">
                                <input type="text" placeholder="URL da imagem 3">
                            </div>

                        </div>
                    </div>
                                
                </li>
        `
    }
}


//function validarPerguntas(){
//     let arrayPerguntas = document.querySelectorAll('li');
//     let perguntasValidas = [];
//     for(let i = 0; i < quantidadePerguntas; i++){
//         let inputs = arrayPerguntas[i].querySelectorAll('input');
//         let textoValido = () => inputs[0].length > 19;

//         let corValida;
//         if(regexHex.test(inputs[1].value)){
//             corValida = true;
//         }

//         let corretaValida;
//         if(inputs[2].value !== ''){
//             corretaValida = true;
//         }

//         let imgCorretaValida;
//         if(regexURL.test(inputs[3].value)){
//             imgCorretaValida = true;
//         }


//         let incorretasValida = () => {
//             let validas = [];
//             for (let i = 4; i < 10; i += 2){
//                 let contador = 0;
//                 if(inputs[i].value !== ''){
//                     contador++
//                     validas.push(i);
//                 }
//             }
//             if(contador === 0){
//                 return false;
//                 break;
//             }
//             for(let i = 0; i < validas.length; i++){
//                 if(!regexURL.test(inputs[validas[i]+1].value)){
//                     return false;
//                     break;
//                 }
//             }else{

//             }
//         }


//     }

// }


function validarPerguntas(){
    let input = document.querySelectorAll('.inputPergunta');
    let quizzAnswersValid = false;
    let hasError = false;

    const arr = [];
    const resps =[];
    for(let i = 0; i < input.length; i++){
        cont obj = [];
        for (let j = 0; j < input[i].childNodes.length; j++){
            
    }
}

function criarNiveis (){
    conteiner.innerHTML = `
    <div class="criarInfoNiveis">
        <span>Agora, decida os níveis</span>

        <ul>
        </ul>

        <button onclick="validarNiveis ()">Finalizar Quizz</button>
    </div>
    `

    const ul = document.querySelector('ul');
    for (let i = 0; i < quantidadeNiveis; i++){
        ul.innerHTML += `
            <li class="conteinerNivel"> 
                        
                <div class="headerNivel">
                    <span>Nivel ${i + 1}</span>
                    <ion-icon name="open-outline" onclick="escondeInfo(this.parentNode.parentNode,this)"></ion-icon>
                </div>
                <div class="inputNivel escondido">
                    <input type="text" placeholder="Título do nível">
                    <input type="text" placeholder="% de acerto mínima">
                    <input type="text" placeholder="URL da imagem do nível">
                    <input type="text" placeholder="Descrição do nível">
                </div>
                            
            </li>
        `
    }
}

function escondeInfo(conteiner,icon){
    let inputs = conteiner.querySelectorAll('div')[1];
    let temSelecionado = document.querySelector('li.expandido');

    if(temSelecionado !== null){
        let inputExpandido = temSelecionado.querySelectorAll('div')[1];
        inputExpandido.classList.toggle('escondido');
        temSelecionado.querySelector('ion-icon').classList.remove('escondido');
        temSelecionado.classList.remove('expandido')

    }


    icon.classList.add('escondido');
    conteiner.classList.add('expandido')

    
    inputs.classList.toggle('escondido');


}


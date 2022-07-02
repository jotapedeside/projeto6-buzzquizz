const conteiner = document.querySelector(".conteiner");
let quantidadeNiveis;
let quantidadePerguntas;
let quizz = {
  title: "",
  image: "",
  questions: [],
  levels: [],
};
const regexURL = /(https?):\/\/.*\.(jpg|jpeg|png|webp|avif|gif|svg)/; //regex to check if URL is valid

function criarQuizz() {
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
        `;
}

function validarInfoBasica() {
  let input = document.querySelectorAll(".criarInfoBasicas input");
  let tituloValido;
  if (input[0].value.length > 0 && input[0].value.length < 66) {
    //19, not 0
    tituloValido = true;
  }

  let urlValida; /*
  for (let i = 0; i < 8; i++) {
    const url = "https://";
    if (input[1].value[i] !== url[i]) {
      break;
    }
    if (i === 7) {*/
  urlValida = true; /*
    }
  }*/

  let quantidadePerguntasValida;
  if (input[2].value > 1) {
    //2, not 1
    quantidadePerguntasValida = true;
  }

  let quantidadeNiveisValido;
  if (input[3].value >= 1) {
    quantidadeNiveisValido = true;
  }

  if (
    tituloValido &&
    urlValida &&
    quantidadePerguntasValida &&
    quantidadeNiveisValido
  ) {
    quizz.title = input[0].value;
    quizz.image = input[1].value;
    quantidadePerguntas = input[2].value;
    quantidadeNiveis = input[3].value;
    criarPerguntas();
  } else {
    alert("Preencha os dados novamente.");
  }
}

function criarPerguntas() {
  conteiner.innerHTML = `
        <div class="criarInfoPerguntas">
            <span>Crie suas perguntas</span>

            <ul>

            </ul>

            <button onclick="validarPerguntas()">Prosseguir pra criar níveis</button>
        </div>
    `;

  const ul = document.querySelector("ul");
  for (let i = 0; i < quantidadePerguntas; i++) {
    ul.innerHTML += `
                <li class="conteinerPergunta"> 
                            
                    <div class="headerPergunta">
                        <span>Pergunta ${i + 1}</span>
                        <ion-icon name="open-outline" onclick="escondeInfo(this.parentNode.parentNode,this)"></ion-icon>
                    </div>
                    <div class="inputPergunta escondido">

                        <div class="textoPergunta">
                            <input type="text" placeholder="Texto da pergunta">
                            <input type="text" placeholder="Cor de fundo da pergunta">
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
        `;
  }
}

function validarPerguntas() {
  let arrayPerguntas = document.querySelectorAll("li");
  let perguntasValidas = [];
  for (let i = 0; i < quantidadePerguntas; i++) {
    let inputs = arrayPerguntas[i].querySelectorAll("input");
    let textoValido;
    let corValida;
    let corretaValida;
    let imgCorretaValida;
    let incorretasValida;

    if (inputs[0].length > 19) {
      textoValido = true;
    }
  }
  criarNiveis();
}

function criarNiveis() {
  conteiner.innerHTML = `
    <div class="criarInfoNiveis">
        <span>Agora, decida os níveis</span>

        <ul>
        </ul>

        <button onclick="validateQuizzLevels()">Finalizar Quizz</button>
    </div>
    `;

  const ul = document.querySelector("ul");
  for (let i = 0; i < quantidadeNiveis; i++) {
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
        `;
  }
}

function escondeInfo(conteiner, icon) {
  let inputs = conteiner.querySelectorAll("div")[1];
  let temSelecionado = document.querySelector("li.expandido");

  if (temSelecionado !== null) {
    let inputExpandido = temSelecionado.querySelectorAll("div")[1];
    inputExpandido.classList.toggle("escondido");
    temSelecionado.querySelector("ion-icon").classList.remove("escondido");
    temSelecionado.classList.remove("expandido");
  }

  icon.classList.add("escondido");
  conteiner.classList.add("expandido");

  inputs.classList.toggle("escondido");
}

function validateQuizzLevels(quiz) {
  let input = document.querySelectorAll(".criarInfoNiveis input");
  let quizzLevelsValid;
  console.log(input.value);
  //TODO test url
  if (
    input[0].value.length < 10 ||
    input[1].value < 0 ||
    input[1].value > 100 ||
    regexURL.test(input[2].value) == false ||
    input[3].value < 30
  )
    alert("Cheque os dados e tente novamente!");
  else console.log("Níveis corretos");
}

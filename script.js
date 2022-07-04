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
  let urlValida;
  let quantidadePerguntasValida;
  let quantidadeNiveisValido;

  //LAZIER
  input[0].value = "Título do quizzzzz";
  input[1].value =
    "https://veja.abril.com.br/wp-content/uploads/2019/12/amazonia-floresta-coraccca7ao.jpg.jpg";
  input[2].value = "3";
  input[3].value = "2";
  quizz.title = input[0].value;
  quizz.image = input[1].value;
  quantidadePerguntas = input[2].value;
  quantidadeNiveis = input[3].value;
  criarPerguntas();
  /*
  if (input[0].value.length > 19 && input[0].value.length < 66) {
    tituloValido = true;
  }

  for (let i = 0; i < 8; i++) {
    const url = "https://";
    if (input[1].value[i] !== url[i]) {
      break;
    }
    if (i === 7) {
      urlValida = true;
    }
  }

  if (input[2].value > 2) {
    quantidadePerguntasValida = true;
  }

  if (input[3].value > 1) {
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
  }*/
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
                            <input type="text" name="title" placeholder="Texto da pergunta">
                            <input type="text" name="color" placeholder="Cor de fundo da pergunta">
                        </div>

                        <span>Resposta correta</span>
                        <div class="respCorreta">
                            <input type="text" name="text" placeholder="Resposta correta">
                            <input type="text" name="image" placeholder="URL da imagem">
                        </div>

                        <span>Respostas incorretas</span>
                        <div class="respIncorreta">
                            <div>
                                <input type="text" name="text" placeholder="Resposta incorreta 1">
                                <input type="text" name="image" placeholder="URL da imagem 1">
                            </div>
                            <div>
                                <input type="text" name="text" placeholder="Resposta incorreta 2">
                                <input type="text" name="image" placeholder="URL da imagem 2">
                            </div>
                            <div>
                                <input type="text" name="text" placeholder="Resposta incorreta 3">
                                <input type="text" name="image" placeholder="URL da imagem 3">
                            </div>

                        </div>
                    </div>
                                
                </li>
        `;
  }
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
                <div class="inputNivel escondido level-${i + 1}">
                    <input name="title" type="text" placeholder="Título do nível">
                    <input name="minValue" type="text" placeholder="% de acerto mínima">
                    <input name="image" type="text" placeholder="URL da imagem do nível">
                    <input name="text" type="text" placeholder="Descrição do nível">
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
  let input = document.querySelectorAll(".inputNivel");
  let quizzLevelsValid = false;
  let hasError = false;

  const arraEl = [];
  for (let i = 0; i < input.length; i++) {
    const obj = {};
    for (let j = 0; j < input[i].childNodes.length; j++) {
      if (input[i].childNodes[j].nodeType == 1) {
        obj[input[i].childNodes[j].name] = input[i].childNodes[j].value;
      }
    }
    arraEl.push(obj);
  }

  console.log(arraEl);

  for (let ii = 0; ii < arraEl.length; ii++) {
    if (
      arraEl[ii].title.length < 10 ||
      arraEl[ii].minValue < 0 ||
      arraEl[ii].minValue > 100 ||
      regexURL.test(arraEl[ii].image) == false ||
      arraEl[ii].text.length < 30
    )
      hasError = true;
  }
  if (hasError == true) {
    alert(`Cheque os dados e tente novamente!`);
  } else if (
    arraEl.find((el) => {
      return el.minValue == "0";
    })
  ) {
    quizzLevelsValid = true;
    postQuizz ();
  } else alert(`Precisa de pelo menos um nível com 0% de acerto mínimo`);
  console.log(quizzLevelsValid);
}


function postQuizz (){
  let promise = axios.post('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes',quizz);
  promise.then(quizzUploaded)
  promise.catch(() => {alert('algo deu errado')});
}

function quizzUploaded(){
  conteiner.innerHTML = `
    <div class="quizzPronto">
      <span>Seu quizz está pronto!</span>

      <div class="quizzCriado" onclick="renderizarQuizz(${quizz})" style="background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 65.62%, rgba(0, 0, 0, 0.8) 100%),url('${quizz.image}')">
          
          <p>${quizz.title}</p>
      </div>

      <button onclick="renderizarQuizz(${quizz})">Acessar Quizz</button>
      <p onclick="renderizarPaginaInicial()">Voltar pra home</p>
    </div>
  `;

}

function renderizarQuizz(){
  
}

function getQuizz(){
  let promise = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes');
  promise.then(exibeQuizz);

}
getQuizz();

function exibeQuizz(resposta){
  let quizzes = resposta.data;
  let areaQuizzesServidor = document.querySelector('.todosOsQuizzes');
  for(let i = 0;i < quizzes.length; i++){
    areaQuizzesServidor.innerHTML += `


      <div class="quizzExibido" onclick="renderizarQuizz()" style="background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 65.62%, rgba(0, 0, 0, 0.8) 100%),url('${quizzes[i].image}')">
          
          <p>${quizzes[i].title}</p>
      </div>



    `;
  
  }

}

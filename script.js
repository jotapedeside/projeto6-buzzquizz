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
const regexHex = /#[a-fA-F0-9]{6}/;

function criarQuizz() {
  conteiner.innerHTML = `
        <div class="criarInfoBasicas">
            <span>Comece pelo começo</span>
            <div class="inputBasicInfo">
                <input name="title" type="text" placeholder="Título do seu quizz">
                <input name="image" type="text" placeholder="URL da imagem do seu quizz">
                <input name="qtdeQuestions" type="text" placeholder="Quantidade de perguntas do quizz">
                <input name="qtdeLevels" type="text" placeholder="Quantidade de níveis do quizz">
            </div>

            <button onclick="validarInfoBasica()">Prosseguir pra criar perguntas</button>
        </div>
        `;
}

function validarInfoBasica() {
  let input = document.querySelector(".inputBasicInfo");
  let hasError = false;

  //LAZIER
  /*
  input[0].value = "Título do quizzzzz";
  input[1].value =
    "https://veja.abril.com.br/wp-content/uploads/2019/12/amazonia-floresta-coraccca7ao.jpg.jpg";
  input[2].value = "3";
  input[3].value = "2";
  quizz.title = input[0].value;
  quizz.image = input[1].value;
  quantidadePerguntas = input[2].value;
  quantidadeNiveis = input[3].value;
  criarPerguntas();*/

  const objBasicInfo = {};
  for (let j = 0; j < input.childNodes.length; j++) {
    if (input.childNodes[j].nodeType == 1) {
      objBasicInfo[input.childNodes[j].name] = input.childNodes[j].value;
    }
  }

  if (
    (objBasicInfo.title.length < 20 && objBasicInfo.title.length > 65) ||
    regexURL.test(objBasicInfo.image) == false ||
    objBasicInfo.qtdeQuestions < 0 ||
    objBasicInfo.qtdeLevels < 0 //change
  ) {
    hasError = true;
  }

  if (hasError == true) {
    alert(`Cheque os dados e tente novamente!`);
  } else {
    quizz.title = objBasicInfo.title;
    quizz.image = objBasicInfo.image;
    quantidadePerguntas = objBasicInfo.qtdeQuestions;
    quantidadeNiveis = objBasicInfo.qtdeLevels;
    criarPerguntas();
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
                <div class="inputPergunta escondido pergunta-${i + 1}">
                        <div class="textoPergunta">
                            <input name="title" type="text" placeholder="Texto da pergunta">
                            <input name="color" type="text" placeholder="Cor de fundo da pergunta">
                        </div>

                        <span>Resposta correta</span>
                        <div class="respCorreta">
                            <input name="correctAnswer" type="text" placeholder="Resposta correta">
                            <input name="image" type="text" placeholder="URL da imagem">
                        </div>

                        <span>Respostas incorretas</span>
                        <div class="respIncorreta">
                            <div class="incorrect1">
                                <input name="answer" type="text" placeholder="Resposta incorreta 1">
                                <input name="image" type="text" placeholder="URL da imagem 1">
                            </div>
                            <div class="incorrect2">
                                <input name="answer" type="text" placeholder="Resposta incorreta 2">
                                <input name="image" type="text" placeholder="URL da imagem 2">
                            </div>
                            <div class="incorrect3">
                                <input name="answer" type="text" placeholder="Resposta incorreta 3">
                                <input name="image" type="text" placeholder="URL da imagem 3">
                            </div>

                        </div>
                    </div>
                                
                </li>
        `;
  }
}

function validarPerguntas() {
  let inputQuestion = document.querySelectorAll(".textoPergunta");
  let inputCorrectAnswer = document.querySelectorAll(".respCorreta");
  let inputIncorrectAnswer1 = document.querySelectorAll(".incorrect1");
  let inputIncorrectAnswer2 = document.querySelectorAll(".incorrect2");
  let inputIncorrectAnswer3 = document.querySelectorAll(".incorrect3");

  let quizzLevelsValid = false;
  let hasError = false;

  const arrQuestion = [];
  for (let ii = 0; ii < inputQuestion.length; ii++) {
    const objQuestion = {};
    for (let jj = 0; jj < inputQuestion[ii].childNodes.length; jj++) {
      if (inputQuestion[ii].childNodes[jj].nodeType == 1) {
        objQuestion[inputQuestion[ii].childNodes[jj].name] =
          inputQuestion[ii].childNodes[jj].value;
      }
    }
    arrQuestion.push(objQuestion);
  }

  const arrCorrectAnswer = [];
  for (let ii = 0; ii < inputCorrectAnswer.length; ii++) {
    const objCorrectAnswer = {};
    for (let jj = 0; jj < inputCorrectAnswer[ii].childNodes.length; jj++) {
      if (inputCorrectAnswer[ii].childNodes[jj].nodeType == 1) {
        objCorrectAnswer[inputCorrectAnswer[ii].childNodes[jj].name] =
          inputCorrectAnswer[ii].childNodes[jj].value;
      }
    }
    arrCorrectAnswer.push(objCorrectAnswer);
  }

  const objIncorrectAnswer1 = [];
  for (let ii = 0; ii < inputIncorrectAnswer1.length; ii++) {
    const objCorrectAnswer = {};
    for (let jj = 0; jj < inputIncorrectAnswer1[ii].childNodes.length; jj++) {
      if (inputIncorrectAnswer1[ii].childNodes[jj].nodeType == 1) {
        objCorrectAnswer[inputIncorrectAnswer1[ii].childNodes[jj].name] =
          inputIncorrectAnswer1[ii].childNodes[jj].value;
      }
    }
    objIncorrectAnswer1.push(objCorrectAnswer);
  }

  const objIncorrectAnswer2 = [];
  for (let ii = 0; ii < inputIncorrectAnswer2.length; ii++) {
    const objCorrectAnswer = {};
    for (let jj = 0; jj < inputIncorrectAnswer2[ii].childNodes.length; jj++) {
      if (inputIncorrectAnswer2[ii].childNodes[jj].nodeType == 1) {
        objCorrectAnswer[inputIncorrectAnswer2[ii].childNodes[jj].name] =
          inputIncorrectAnswer2[ii].childNodes[jj].value;
      }
    }
    objIncorrectAnswer2.push(objCorrectAnswer);
  }

  const objIncorrectAnswer3 = [];
  for (let ii = 0; ii < inputIncorrectAnswer3.length; ii++) {
    const objCorrectAnswer = {};
    for (let jj = 0; jj < inputIncorrectAnswer3[ii].childNodes.length; jj++) {
      if (inputIncorrectAnswer3[ii].childNodes[jj].nodeType == 1) {
        objCorrectAnswer[inputIncorrectAnswer3[ii].childNodes[jj].name] =
          inputIncorrectAnswer3[ii].childNodes[jj].value;
      }
    }
    objIncorrectAnswer3.push(objCorrectAnswer);
  }

  for (let ii = 0; ii < inputQuestion.length; ii++) {
    let hasInAn1 = false;
    let hasInAn2 = false;
    let hasInAn3 = false;

    if (
      !arrQuestion[ii].title ||
      arrQuestion[ii].title < 20 ||
      !arrQuestion[ii].color ||
      regexHex.test(arrQuestion[ii].color) == false ||
      !arrCorrectAnswer[ii].correctAnswer ||
      !arrCorrectAnswer[ii].image ||
      regexURL.test(arrCorrectAnswer[ii].image) == false ||
      (!objIncorrectAnswer1[ii].answer &&
        !objIncorrectAnswer1[ii].image &&
        !objIncorrectAnswer2[ii].answer &&
        !objIncorrectAnswer2[ii].image &&
        !objIncorrectAnswer3[ii].answer &&
        !objIncorrectAnswer3[ii].image)
    )
      hasError = true;

    if (
      objIncorrectAnswer1[ii].answer &&
      regexURL.test(objIncorrectAnswer1[ii].image) == true
    )
      hasInAn1 = true;
    if (
      objIncorrectAnswer2[ii].answer &&
      regexURL.test(objIncorrectAnswer2[ii].image) == true
    )
      hasInAn2 = true;

    if (
      objIncorrectAnswer3[ii].answer &&
      regexURL.test(objIncorrectAnswer3[ii].image) == true
    )
      hasInAn3 = true;

    if (hasInAn1 == true || hasInAn2 == true || hasInAn3 == true)
      console.log("Nenhum problema");
    else if (hasInAn1 == false && hasInAn2 == false && hasInAn3 == false)
      hasError = true;
  }

  if (hasError == true) {
    alert(`Cheque as perguntas e tente novamente!`);
  } else {
    quizzLevelsValid = true;

    criarNiveis();
  }
  console.log(hasError);
  console.log(quizzLevelsValid);
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

function validateQuizzLevels() {
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
    postQuizz();
  } else alert(`Precisa de pelo menos um nível com 0% de acerto mínimo`);
  console.log(quizzLevelsValid);
}

function postQuizz() {
  let promise = axios.post(
    "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes",
    quizz
  );
  promise.then(quizzUploaded);
  promise.catch(() => {
    alert("algo deu errado");
  });
}

function quizzUploaded() {
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


      <div class="quizzExibido" onclick="selecionarQuizz(${quizzes[i].id})" style="background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 65.62%, rgba(0, 0, 0, 0.8) 100%),url('${quizzes[i].image}')">
          
          <p>${quizzes[i].title}</p>
      </div>



    `;
  
  }

}

function selecionarQuizz(id){
  let promise = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${id}`);
  promise.then(renderizarQuizz);
}

function comparador(){
  return Math.random() - 0.5;
}



function renderizarQuizz(objeto){
  let obj = objeto.data;
  console.log(obj);
  conteiner.innerHTML = '';
  let conteinerPerguntas = document.querySelector('.conteinerPerguntas');

  conteinerPerguntas.innerHTML = `
  <div class="bannerQuizz" style="  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('${obj.image}')">
    <div><p>${obj.title}</p></div>
  </div>
  <div class="perguntas">

  </div>
  `;

  let perguntas = document.querySelector('.perguntas');
  for(let i = 0;i < obj.questions.length; i++){
    perguntas.innerHTML += `
      <div class="pergunta">
          <div class="perguntaTexto" style="background-color:${obj.questions[i].color}"><div><p>${obj.questions[i].title}</p></div></div>


      </div>
    `;
    let respostas = []
    for(let j = 0; j < obj.questions[i].answers.length; j++){
      respostas.push(obj.questions[i].answers[j])
    }
    for(let j = respostas.length -1; j > 0; j--){
      const k = Math.floor(Math.random() * (j + 1));
      const temp = respostas[j];
      respostas[j] = respostas[k];
      respostas[k] = temp
    }


    for(let j = 0; j < respostas.length; j++){
      document.querySelectorAll('.pergunta')[i].innerHTML +=`
        <div class="resposta naoSelecionado ${respostas[j].isCorrectAnswer}" onclick="selecionaReposta(this)">
          <img src=${respostas[j].image}>
          <p>${respostas[j].text}</p>
        </div>
      `
    }
  }

}

function selecionaReposta(selecionada, certa){

  let respostas = selecionada.parentNode.querySelectorAll('.naoSelecionado');
  if(respostas.length === selecionada.parentNode.querySelectorAll('.resposta').length)
  {  for(let i =0; i < respostas.length; i++){
    respostas[i].classList.remove('naoSelecionado');
    
    }


    selecionada.classList.add('selecionado');
  }
}

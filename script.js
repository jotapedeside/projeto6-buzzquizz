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
const regexHex = /#[a-zA-z0-9](6)/;

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

  let perguntasValidas = false;
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
      !inputQuestion[ii].title ||
      inputQuestion[ii].title < 30 ||
      !inputQuestion[ii].color ||
      regexHex.test(inputQuestion[ii].color == false) ||
      !inputCorrectAnswer[ii].correctAnswer ||
      !inputCorrectAnswer[ii].image ||
      regexURL.test(inputCorrectAnswer[ii].image == false) ||
      (!inputIncorrectAnswer1[ii].answer &&
        !inputIncorrectAnswer1[ii].image &&
        !inputIncorrectAnswer2[ii].answer &&
        !inputIncorrectAnswer2[ii].image &&
        !inputIncorrectAnswer3[ii].answer &&
        !inputIncorrectAnswer3[ii].image)
    )
      hasError = true;

    if (
      inputIncorrectAnswer1[ii].answer &&
      regexURL.test(inputIncorrectAnswer1[ii].image) == true
    )
      hasInAn1 = true;
    if (
      inputIncorrectAnswer2[ii].answer &&
      regexURL.test(inputIncorrectAnswer2[ii].image) == true
    )
      hasInAn2 = true;

    if (
      inputIncorrectAnswer3[ii].answer &&
      regexURL.test(inputIncorrectAnswer3[ii].image) == true
    )
      hasInAn3 = true;

    if (hasInAn1 == true || hasInAn2 == true || hasInAn3 == true)
      console.log("Nenhum problema");
    else if (hasInAn1 == false && hasInAn2 == false && hasInAn3 == false)
      hasError = true;

    /*
    switch (true) {
      case hasInAn1 == false && hasInAn2 == false && hasInAn3 == true:
        console.log("lie, lie, vdd");
        break;

      case hasInAn1 == false && hasInAn2 == true && hasInAn3 == false:
        console.log("lie, vdd, lie");
        break;

      case hasInAn1 == false && hasInAn2 == true && hasInAn3 == true:
        console.log("lie, vdd, vdd");
        break;

      case hasInAn1 == true && hasInAn2 == false && hasInAn3 == false:
        console.log("vdd, lie, lie");
        break;

      case hasInAn1 == true && hasInAn2 == false && hasInAn3 == true:
        console.log("vdd, lie, vdd");
        break;

      case hasInAn1 == true && hasInAn2 == true && hasInAn3 == false:
        console.log("vdd, vdd, lie");
        break;

      case hasInAn1 == true && hasInAn2 == true && hasInAn3 == true:
        console.log("vdd, vdd, vdd");
        break;

      default:
        console.log("lie, lie, lie");
        break;
    }*/
  }

  if (hasError == true) {
    alert(`Cheque as perguntas e tente novamente!`);
  } else {
    quizzLevelsValid = true;

    criarNiveis();
  }
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
    //chamar próx func
  } else alert(`Precisa de pelo menos um nível com 0% de acerto mínimo`);
  console.log(quizzLevelsValid);
}

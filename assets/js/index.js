const quizQuestions = [
  {
    title:
      "Which of the following Bat vehicles did Batman and Robin once drive as Bruce Wayne and Dick Grayson?",
    options: ["Batboat", "Batmobile", "Batcycle", "Batcopter"],
    correctOption: "Batcycle",
  },
  {
    title: "Catwoman once owned a tiger as a pet. What was the tiger's name?",
    options: [" Mortimer", "Isolde", "Felix", "Tinkerbell"],
    correctOption: "Tinkerbell",
  },
  {
    title: "Which villainess did Batman almost get married to?",
    options: [
      "Calamity Jan",
      "Catwoman",
      "Lola Lasagne",
      "Marsha, Queen of Diamonds",
    ],
    correctOption: "Marsha, Queen of Diamonds",
  },
  {
    title: "What was Mr. Freeze's favorite dessert?",
    options: [
      "Caramelized banana pudding",
      "Baked Alaska",
      "Peach cobbler",
      "Fig cake",
    ],
    correctOption: "Baked Alaska",
  },
  {
    title: "What was Batman adamant about during a Bat-climb?",
    options: [
      "Keeping both hands on the Bat-rope",
      "They must always be talkinge",
      "Not looking down",
      "They must not put their dirty boots on clean windows",
    ],
    correctOption: "Keeping both hands on the Bat-rope",
  },
  {
    title:
      "Where was Joker and Catwoman's hideout, The Grimalkin Novelty Company, located?",
    options: [
      "34 Lombard Road",
      "On the corner of Juggle Drive and Laugher Avenue",
      "On the corner of Cattail Lane and Nine Lives Alley",
      "2809 West 20th Street",
    ],
    correctOption: "On the corner of Cattail Lane and Nine Lives Alley",
  },
  {
    title:
      "The first time escaping from the police, False Face disguised himself as what?",
    options: ["Chef", "Bank guard", "Firefighter", "Cowboy"],
    correctOption: "Chef",
  },
  {
    title: "How far was it from the Batcave to Gotham City?",
    options: ["Half a mile", "1 mile", "14 miles", "20 miles"],
    correctOption: "14 miles",
  },
  {
    title:
      "What was the name of the exploding book that the Bookworm's assistant, Lydia Limpet, placed in the front seat of the Batmobile?",
    options: [
      "Magical Paths to Fortune and Power",
      "For Whom the Bell Tolls",
      "The Secret of Success...Self-Control",
      "Gone With the Wind",
    ],
    correctOption: "For Whom the Bell Tolls",
  },
  {
    title:
      "What was the first clue Batman and Robin received from the Riddler?",
    options: [
      "How many sides is a circle?",
      "When is a man drowned, but still not wet?",
      "Why is an orange like a bell?",
      "What has 4 legs, runs day and night, but never gets anywhere?",
    ],
    correctOption: "Why is an orange like a bell?",
  },
];

let currentQuestionIndex = 0;
let count = quizQuestions.length * 10;
// let count = 10;

const constructOptions = function (options) {
  const optionsContainer = document.createElement("div");
  optionsContainer.setAttribute("class", "options-container");

  for (let i = 0; i < options.length; i++) {
    // get the current option from array
    const option = options[i];

    // create my button
    const optionButton = document.createElement("button");
    optionButton.setAttribute("class", "option-item");
    optionButton.setAttribute("name", "option");
    optionButton.setAttribute("data-option", option);
    optionButton.textContent = option;

    // append to optionsContainer
    optionsContainer.appendChild(optionButton);
  }

  return optionsContainer;
};

const constructAlert = function (className, text) {
  // construct div
  const alertDiv = document.createElement("div");
  alertDiv.setAttribute("class", className);
  alertDiv.textContent = text;

  return alertDiv;
};

const getFromLocalStorage = function (key, defaultValue) {
  const localStorageData = JSON.parse(localStorage.getItem(key));

  if (!localStorageData) {
    return defaultValue;
  } else {
    return localStorageData;
  }
};

const storeScore = function () {
  // get count value
  const score = count;

  // get user initials from input
  const initials = document.getElementById("user-initials").value;

  // construct score object
  const scoreObject = {
    score: score,
    initials: initials,
  };

  // get from LS before inserting object
  const highscores = getFromLocalStorage("highscores", []);

  // insert the score object
  highscores.push(scoreObject);

  // write back to LS
  localStorage.setItem("highscores", JSON.stringify(highscores));
};

const constructForm = function () {
  const divContainer = document.createElement("div");
  divContainer.setAttribute("class", "container score-form");

  const form = document.createElement("form");

  const h2Element = document.createElement("h2");
  h2Element.setAttribute("class", "question");
  h2Element.textContent = "Your score is " + count;

  const formContainer = document.createElement("div");
  formContainer.setAttribute("class", "form-container");

  const formInputDiv = document.createElement("div");
  formInputDiv.setAttribute("class", "form-item");

  const formInput = document.createElement("input");
  formInput.setAttribute("placeholder", "Enter your initials");
  formInput.setAttribute("id", "user-initials");

  const formButtonDiv = document.createElement("div");
  formButtonDiv.setAttribute("class", "form-item");

  const formButton = document.createElement("button");
  formButton.setAttribute("class", "btn");
  formButton.textContent = "Submit";

  formInputDiv.append(formInput);
  formButtonDiv.append(formButton);

  formContainer.append(formInputDiv, formButtonDiv);

  form.append(h2Element, formContainer);
  divContainer.append(form);

  form.addEventListener("submit", storeScore);

  return divContainer;
};

const renderSuccessAlert = function () {
  // construct alert
  const alert = constructAlert(
    "container answer-alert answer-alert-success",
    "Congratulations, you are correct!!"
  );

  // append the alert to the document
  document.getElementById("alert-container").appendChild(alert);

  // declare a timeout function (to remove the element)
  const afterWait = function () {
    // remove alert
    alert.remove();

    // kill timeout
    clearTimeout(delay);
  };

  // start a timeout (delay)
  const delay = setTimeout(afterWait, 1000);
};

const renderDangerAlert = function () {
  // construct alert
  const alert = constructAlert(
    "container answer-alert answer-alert-danger",
    "Nope, Try Again!"
  );

  // append the alert to the document
  document.getElementById("alert-container").appendChild(alert);

  // declare a timeout function (to remove the element)
  const afterWait = function () {
    // remove alert
    alert.remove();

    // kill timeout
    clearTimeout(delay);
  };

  // start a timeout (delay)
  const delay = setTimeout(afterWait, 1000);
};

const renderScoreForm = function () {
  // remove the last question
  removeQuestionContainer();

  // construct score form
  const form = constructForm();

  // append form to document
  document.getElementById("main-container").append(form);
};

const verifyAnswer = function (event) {
  const target = event.target;
  const currentTarget = event.currentTarget;

  // check if click is from button ONLY
  if (target.getAttribute("name") === "option") {
    // get the option user clicked on
    const userOption = target.getAttribute("data-option");

    // get the correct option for the question
    const correctOption = currentTarget.getAttribute("data-correct");

    console.log(userOption, correctOption);

    // verify the 2
    if (userOption !== correctOption) {
      // time penalty deduct 5 seconds
      count -= 5;
      document.getElementById("countdown").textContent = count;
      renderDangerAlert();
    } else {
      console.log("CORRECT");
      renderSuccessAlert();
    }

    // go to next question 0 1 2 (3)
    currentQuestionIndex += 1;

    // check if last question
    if (currentQuestionIndex < quizQuestions.length) {
      // render the next question
      removeQuestionContainer();
      renderQuestionContainer();
    } else {
      renderScoreForm();
    }
  }
};

const constructQuestionContainer = function (question) {
  // construct container div
  const questionContainer = document.createElement("div");
  questionContainer.setAttribute("class", "container question-container");
  questionContainer.setAttribute("id", "question-container");
  questionContainer.setAttribute("data-correct", question.correctOption);

  // construct h2 element
  const questionH2 = document.createElement("h2");
  questionH2.setAttribute("class", "question");
  questionH2.textContent = question.title;

  // construct options div
  const options = constructOptions(question.options);

  // appending h2 and options div to container div
  questionContainer.append(questionH2, options);

  // add event listener to listen for click events
  questionContainer.addEventListener("click", verifyAnswer);

  return questionContainer;
};

// render question container
const renderQuestionContainer = function () {
  // get the current question
  const currentQuestion = quizQuestions[currentQuestionIndex];

  // construct the HTML for the question container
  const questionContainer = constructQuestionContainer(currentQuestion);

  // append the container to the document
  document.getElementById("main-container").appendChild(questionContainer);
};

const removeStartContainer = function () {
  // target start container
  const startContainer = document.getElementById("start-container");
  // remove from document
  startContainer.remove();
};

const removeQuestionContainer = function () {
  // target question container
  const questionContainer = document.getElementById("question-container");
  // remove from document
  questionContainer.remove();
};

const renderGameOver = function () {
  const divContainer = document.createElement("div");
  divContainer.setAttribute("class", "container game-over");

  const h2Element = document.createElement("h2");
  h2Element.textContent = "GAME OVER";

  divContainer.append(h2Element);

  document.getElementById("main-container").append(divContainer);
};

const startTimer = function () {
  // declare the timer tick function
  const timerTick = function () {
    if (currentQuestionIndex >= quizQuestions.length) {
      clearInterval(timer);
    } else if (count < 0) {
      clearInterval(timer);
      removeQuestionContainer();
      renderGameOver();
    } else {
      count -= 1;
      document.getElementById("countdown").textContent = count;
    }
  };

  // declare the timer
  const timer = setInterval(timerTick, 1000);
};

const initialLocalStorage = function () {
  const dataFromLS = JSON.parse(localStorage.getItem("highscores"));

  if (!dataFromLS) {
    localStorage.setItem("highscores", JSON.stringify([]));
  }
};

// function to execute when start button is called
const startQuiz = function () {
  // initialise local storage
  initialLocalStorage();

  // remove start container
  removeStartContainer();

  // render question container
  renderQuestionContainer();

  // start timer
  startTimer();
};

// target the start quiz button
const startButton = document.getElementById("start-quiz");

// add a click event listener and start quiz
startButton.addEventListener("click", startQuiz);

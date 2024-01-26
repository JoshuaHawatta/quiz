import questions from "./questions.js";
import { handleNextQuestionState, handleUpdateRadio } from "./button.js";
import Counter from "./counter.js";

const body = document.querySelector("body");
const questionTitle = document.querySelector("#question");
const image = document.querySelector("#img");
const answers = document.querySelectorAll(".parag");
const answerOptions = document.querySelectorAll(".radios");
const nextQuestionButton = document.querySelector("#next-btn");

const setQuestionUI = () => {
  nextQuestionButton.textContent = handleNextQuestionState();
  questionTitle.textContent = questions[Counter.questionCounter].question;
  image.src = questions[Counter.questionCounter].img;
  questions[Counter.questionCounter].options.map((option, index) => (answers[index].textContent = option));
};

const displayResult = () => {
  body.classList.remove("right-answer-background", "wrong-answer-background");
  body.innerHTML = `
    <div class='end-quiz-div'>
      <p>You answered ${Counter.rightAnswerCounter} right questions!</p>
      <button onclick="window.location.reload()">Click here to restart the quiz!</button>
    </div>`;
};

setQuestionUI();

answerOptions.forEach(answerOption =>
  answerOption.addEventListener("click", event => {
    event.stopPropagation();

    const isRightAnswer = answerOption.value === questions[Counter.questionCounter].answer;

    if (isRightAnswer) {
      Counter.incrementRightAnswerCounter();
      body.classList.add("right-answer-background");
    } else {
      body.classList.add("wrong-answer-background");
    }

    nextQuestionButton.textContent = handleNextQuestionState();
    handleUpdateRadio();
  })
);

nextQuestionButton.addEventListener("click", () => {
  body.classList.remove("right-answer-background", "wrong-answer-background");

  Counter.incrementCounter();
  answerOptions.forEach(answerOption => (answerOption.disabled = false));

  Counter.questionCounter < questions.length ? setQuestionUI() : displayResult();
});

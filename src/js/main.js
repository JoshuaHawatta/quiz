import questions from './questions.js';
import handleChoosenAnswer, { invertDisabledAttribute } from './buttons.js';
import counterInstance from './counters.js';
export const counters = counterInstance(); // IMPORT_IT_ON_'buttons.js'_TO_ACSSES_THIS_SAME_INSTANCE

const body = document.querySelector('body');
const questionTitle = document.querySelector('#question');
const image = document.querySelector('#img');
const answers = document.querySelectorAll('.parag');
const answerOptions = document.querySelectorAll('.radios');
const nextQuestionButton = document.querySelector('#next-btn');
const restartQuizButton = document.querySelector('.restart-quiz-button');

const updateQuestion = () => {
  body.classList.remove('right-answer-background', 'wrong-answer-background');

  nextQuestionButton.textContent = invertDisabledAttribute();
  questionTitle.textContent = questions[counters.counter].question;
  image.src = questions[counters.counter].img;

  questions[counters.counter].options.map((option, index) => answers[index].textContent = option);
}

const finish = () => {
  body.classList.remove('right-answer-background', 'wrong-answer-background');
  body.innerHTML = `
    <div class='end-quiz-div'>
      <p>You answered ${ counters.showResults() } right questions!</p>
      <button onclick="window.location.reload()">Click here to restart the quiz!</button>
    </div>`
}

const continueOrEndQuiz = () => counters.counter < questions.length ? updateQuestion() : finish();

updateQuestion();
handleChoosenAnswer();

console.log(restartQuizButton)

nextQuestionButton.addEventListener('click', () => {
  counters.incrementCounter();
  answerOptions.forEach((element) => element.disabled = false);
  continueOrEndQuiz()
})
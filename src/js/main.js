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

const actualQuestion = () => {
  nextQuestionButton.textContent = invertDisabledAttribute();

  questionTitle.textContent = questions[counters.counter].question;
  image.src = questions[counters.counter].img;
  questions[counters.counter].options.map((option, index) => answers[index].textContent = option)
}

const finish = () => body.innerHTML = `
  <div className='quiz-end-div'>
    <p>Você acertou ${counters.showResults()} perguntas!</p>
  </div>`

const continueOrEndQuiz = () => counters.counter !== questions.length ? actualQuestion() : finish();

nextQuestionButton.addEventListener('click', () => {
  counters.incrementCounter();
  answerOptions.forEach(element => element.disabled = false);
  continueOrEndQuiz()
})

actualQuestion();
handleChoosenAnswer();
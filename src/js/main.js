import questions from './questions.js';
import { invertDisabledAttribute } from './buttons.js';
import originalCounters from './counters.js';

const body = document.querySelector('body');
const questionTitle = document.querySelector('#question');
const image = document.querySelector('#img');
const answers = document.querySelectorAll('.parag');
const nextQuestionButton = document.querySelector('#next-btn');
const counters = originalCounters();

const showActualQuestion = () => {
  nextQuestionButton.textContent = invertDisabledAttribute();

  questionTitle.textContent = questions[counters.counter].question;
  image.src = questions[counters.counter].img;
  questions[counters.counter].options.map((option, index) => answers[index].textContent = option);
};

const endQuiz = () => body.innerHTML = `<p>Você acertou ${counters.showResults()} perguntas!</p>`

counters.counter !== questions.length ? showActualQuestion() : endQuiz();
import questions from './questions.js';
import originalCounters from './counters.js';
import { invertDisabledAttribute } from './buttons.js';

const questionTitle = document.querySelector('#question');
const image = document.querySelector('#img');
const optionsParagraphs = document.querySelectorAll('.parag');
const nextQuestionButton = document.querySelector('#next-btn');

const counters = originalCounters(questions.lenght);

const showActualQuestion = () => {
  nextQuestionButton.textContent = invertDisabledAttribute();
  questionTitle.textContent = questions[counters.counter].question;
  
  questions[counters.counter].options.map((answerOptions, index) => {
    optionsParagraphs[index].textContent = answerOptions;
    image.src = questions[counters.counter].img
  })
};

export default showActualQuestion;
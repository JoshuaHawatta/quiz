import { questions } from './questions.js';
import { uncheckRadios, disableRadios } from './handleRadioState.js';
import { originalCounters } from './handleCounters.js';
import { showResults } from './handleAnswers.js';
import disableNextQuestionBtn from './handleNextBtn.js';

const body = document.querySelector('body');
const form = document.querySelector('#my-form');
const questionTitle = document.querySelector('#question');
const image = document.querySelector('#img1');
const optionsParagraphs = document.querySelectorAll('.parag');
const nextQuestionButton = document.querySelector('#next-btn');

let { counter } = originalCounters();
const options = { 1: optionsParagraphs[0], 2: optionsParagraphs[1], 3: optionsParagraphs[2] }
const { 1: first, 2: second, 3: third } = options;

const showActualQuestion = () => {
  if(counter !== questions.length) {  
    disableNextQuestionBtn(true);
    questionTitle.textContent = questions[counter].question;

    first.textContent = questions[counter].options.a;
    second.textContent = questions[counter].options.b;
    third.textContent = questions[counter].options.c;

    image.src = questions[counter].img
  }else{ 
    body.removeChild(form);
    showResults()
  }
};
showActualQuestion(); //MUST_BE_CALLED_ONCE_TO_SHOW_THE_FIRST_QUESTION.

nextQuestionButton.addEventListener('click', () => {
  ++counter;
  uncheckRadios();
  disableRadios(false);
  showActualQuestion();
})

export default showActualQuestion;
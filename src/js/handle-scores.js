import { questions } from './questions.js';
import { disableRadios } from './handleRadioState.js';
import disableNextQuestionBtn from './handleNextBtn.js';
import { clonedCounters } from './handleCounters.js';

const body = document.querySelector('body');
const allRadios = document.querySelectorAll('.btn');

let { counter, incrementCounter, incrementRightAnswerCounter, updateScores } = clonedCounters;
disableNextQuestionBtn(true);

export const checkAnswer = answerValue => {
  const allAnswers = questions.map(question => question.answer);
  if(answerValue === allAnswers[counter]) 
  {
    incrementCounter();
    incrementRightAnswerCounter();
    disableRadios(true);
    disableNextQuestionBtn(false);
  }
  else 
  {
    incrementCounter();
    updateScores();
    disableRadios(true);
    disableNextQuestionBtn(false)
  }
}

export const showResults = () => {
  const p = document.createElement('p');
  p.classList.add('show-results');
  p.textContent = `Fim! Você acertou ${ updateScores() }!`;
  body.appendChild(p);
}

allRadios.forEach( radio => radio.addEventListener('click', () => checkAnswer(radio.value)) );
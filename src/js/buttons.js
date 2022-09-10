import questions from './questions.js';
import { counters } from './main.js';

const body = document.querySelector('body');
const nextQuestionButton = document.querySelector('#next-btn');
const answerOptions = document.querySelectorAll('.radios');

export const invertDisabledAttribute = () => {
  if(!nextQuestionButton.disabled) {
    nextQuestionButton.disabled = true;
    return 'Escolha uma resposta.'
  }

  nextQuestionButton.disabled = false;
  return 'Próxima pergunta!'
}

export const changeRadioAttributes = () => {
  answerOptions.forEach(option => {
    option.checked = false;
    option.disabled ? option.disabled = false : option.disabled = true
  })
}

const handleChoosenAnswer = () => {
  answerOptions.forEach(element => element.addEventListener('click', event => {
    event.stopPropagation();

    if(element.value === questions[counters.counter].answer) {
      counters.incrementRightAnswerCounter();
      body.classList.add('right-answer-background');
      changeRadioAttributes();
      nextQuestionButton.textContent = invertDisabledAttribute();

      return
    }

    body.classList.add('wrong-answer-background');
    changeRadioAttributes();
    nextQuestionButton.textContent = invertDisabledAttribute()
  }))
}

export default handleChoosenAnswer
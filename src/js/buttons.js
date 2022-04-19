import questions from './questions.js';
import { counters } from './main.js';

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
      changeRadioAttributes();
      nextQuestionButton.textContent = invertDisabledAttribute()
      return
    }
    
    changeRadioAttributes();
    nextQuestionButton.textContent = invertDisabledAttribute()
  }))
}

export default handleChoosenAnswer;
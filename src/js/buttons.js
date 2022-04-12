const nextQuestionBtn = document.querySelector('#next-btn');
const allRadios = document.querySelectorAll('.btn');

export const disableNextQuestionBtn = element => {
  return element.disabled ? element.disabled = false : element.disabled = true;
};

export const uncheckRadios = () => allRadios.forEach(radio => radio.checked = false);

export const disableRadios = trueOrFalse => allRadios.forEach(radio => radio.disabled = trueOrFalse);
const nextQuestionButton = document.querySelector('#next-btn');

export const invertDisabledAttribute = () => {
  if(!nextQuestionButton.disabled) {
    nextQuestionButton.disabled = true;
    return 'Escolha uma resposta.'
  }
  
  nextQuestionButton.disabled = false;
  return 'Próxima pergunta!'
}
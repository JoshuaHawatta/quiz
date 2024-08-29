const nextQuestionButton = document.querySelector("#next-btn");
const answerOptions = document.querySelectorAll(".radios");

const handleNextQuestionState = () => {
  nextQuestionButton.disabled = !nextQuestionButton.disabled;

  return nextQuestionButton.disabled ? "Choose an answer" : "Go to next question";
};

const handleUpdateRadio = () =>
  answerOptions.forEach(option => {
    option.checked = false;
    option.disabled = !option.disabled;
  });

export { handleNextQuestionState, handleUpdateRadio };

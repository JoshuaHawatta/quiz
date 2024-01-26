const counterInstance = () => ({
  questionCounter: 0,
  rightAnswerCounter: 0,

  incrementCounter: function () {
    this.questionCounter++;
  },

  incrementRightAnswerCounter: function () {
    this.rightAnswerCounter++;
  },
});

const Counter = counterInstance();

export default Counter;

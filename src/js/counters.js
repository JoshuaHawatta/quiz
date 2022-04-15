const originalCounters = (setCounterValue = 0) => {
  const counterInstance = {
    counter: setCounterValue, 
    rightAnswerCounter: 0,
    
    incrementCounter: () => ++counterInstance.counter,
    incrementRightAnswerCounter: () => ++counterInstance.rightAnswerCounter,
    updateScores: () => counterInstance.counter - counterInstance.rightAnswerCounter
  }
  
  return counterInstance;
}

export default originalCounters;
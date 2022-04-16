const originalCounters = () => {
  const counterInstance = {
    counter: 0, 
    rightAnswerCounter: 0,
    
    incrementCounter: () => ++counterInstance.counter,
    incrementRightAnswerCounter: () => ++counterInstance.rightAnswerCounter,
    showResults: () => counterInstance.rightAnswerCounter
  }
  
  return counterInstance;
}

export default originalCounters;
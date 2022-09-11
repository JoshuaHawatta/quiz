const counterInstance = () => {
  const originalCounters = {
    counter: 0, 
    rightAnswerCounter: 0,

    incrementCounter: () => ++ originalCounters.counter,
    incrementRightAnswerCounter: () => ++ originalCounters.rightAnswerCounter,
    showResults: () => originalCounters.rightAnswerCounter
  }
  
  return originalCounters
}

export default counterInstance
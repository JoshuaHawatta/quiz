const counterInstance = () => {
  const originalCounters = {
    counter: 0, 
    rightAnswerCounter: 0,
    
    incrementCounter: () => ++originalCounters.counter,
    incrementRightAnswerCounter: () => ++originalCounters.rightAnswerCounter,
    showResults: () => originalCounters.rightAnswerCounter,
    resetCounters: () => (originalCounters.counter = 0, originalCounters.rightAnswerCounter = 0)
  }
  
  return originalCounters
}

export default counterInstance
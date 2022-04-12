export const originalCounters = (setCounterValue = 0) => {
  const counters = {
    counter: setCounterValue, 
    rightAnswerCounter: 0,
    
    incrementCounter: () => ++counters.counter,
    incrementRightAnswerCounter: () => ++counters.rightAnswerCounter,
    updateScores: () => counters.counter - counters.rightAnswerCounter
  }
  
  return counters;
}

export const counters = originalCounters();
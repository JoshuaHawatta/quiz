import originalCounters from '../js/counters.js';
import { jest } from '@jest/globals';

const counters = originalCounters();

describe('testing counters...', () => {
  afterAll(() => jest.resetAllMocks());

  test('originalCounters should be a object', () => {
    expect(originalCounters).toBeInstanceOf(Object);
  });

  test('counters should be a object', () => {
    expect(counters).toBeInstanceOf(Object);
  });

  test('should return the first counter value as 0', () => {
    expect(originalCounters().counter).toBe(0)
  });

  test('should return the second counter value as 0', () => {
    expect(originalCounters().rightAnswerCounter).toBe(0)
  });

  test('should be able to set the first counter value in parameters', () => {
    const mockedFunction = jest.fn();
    mockedFunction.mockReturnValue([1 ,2, 3, 4]);
    expect(originalCounters( mockedFunction().length ).counter).toBe(4)
  });
  
  test('counters and originalCounters should NOT be the same instance', () => {
    expect(counters === originalCounters()).toBeFalsy()
  });

  test('should be able to have the same "originalCounter" return in 2 different variables', () => {
    const counter1 = originalCounters();
    const counter2 = counter1;
    expect(counter1 === counter2).toBeTruthy()
  });

  test('should be able to acsess the same counters proprieties in different variables.', () => {
    const counter1 = originalCounters();
    const counter2 = counter1;
    expect(counter1.counter === counter2.counter).toBeTruthy()
  })
});

describe('testing counters methods...', () => {

  beforeEach(() => {
    console.log("RESETANDO_CONTADORES...");
    counters.counter = 0;
    counters.rightAnswerCounter = 0
  });

  test('should increase the counter in 1', () => {
    expect(counters.incrementCounter()).toBe(1)
  });

  test('should increase the right answer counter in 1', () => {
    expect(counters.incrementRightAnswerCounter()).toBe(1)
  });

  test('should calculate the counter minous right answers counter', () => {
    counters.incrementCounter(); //1
    counters.incrementCounter(); //2
    counters.incrementRightAnswerCounter(); //1
    expect(counters.updateScores()).toBe(1)
  });

  test('should be able to increment the counter as long as I want', () => {
    counters.incrementCounter();
    counters.incrementCounter();
    counters.incrementCounter();
    counters.incrementCounter();
    expect(counters.counter).toBe(4)
  });
  
  test('should be able to increment the right answer counter as long as I want', () => {
    counters.incrementRightAnswerCounter();
    counters.incrementRightAnswerCounter();
    counters.incrementRightAnswerCounter();
    counters.incrementRightAnswerCounter();
    expect(counters.rightAnswerCounter).toBe(4)
  });
})
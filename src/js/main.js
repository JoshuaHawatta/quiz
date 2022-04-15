import questions from './questions.js';
import originalCounters from './counters.js';
import showActualQuestion from './actual-question.js';

const counters = originalCounters(questions.lenght);

counters.counter !== questions.length ? showActualQuestion() : console.log('IMPLEMENT_LOGIC...');
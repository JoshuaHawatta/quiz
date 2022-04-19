/**@jest-environment jsdom*/
import { jest } from '@jest/globals';
import questions from '../js/questions';
import counterInstance from '../js/counters';
const counters = counterInstance();

describe('TESTING_"mockedCheckIfHasQuestionsLeft"_FUNCTION...', () => {
  document.body.innerHTML = `
    <button id='next-btn'>Escolha uma resposta.</button>

    <label for='a' class='labels'>
        <input type='radio' name='radio' id='a' value='a' class='radios btn' /> 
        <p class='parag' id='p1'>option</p>
      </label>
      <br />

    <label for='b' class='labels'>
      <input type='radio' name='radio' id='b' value='b' class='radios btn' /> 
      <p class='parag' id='p2'>option</p>
    </label>
    <br />

    <label for='c' class='labels'>
      <input type='radio' name='radio' id='c' value='c' class='radios btn' /> 
      <p class='parag' id='p3'>option</p>
    </label>
    <br />`

  const radios = document.querySelectorAll('.radios');
  const answers = document.querySelectorAll('.parag');
  const mockedButton = document.querySelector('#next-btn');

  const mockedInvertDisabledAttribute = jest.fn().mockImplementation(() => {
    if(!mockedButton.disabled) {
      mockedButton.disabled = true;
      return 'Escolha uma resposta.'
    }

    mockedButton.disabled = false;
    return 'Próxima pergunta!'
  })

  const mockedCheckIfHasQuestionsLeft = jest.fn().mockImplementation(() => {
    if(counters.counter !== questions.length) {
      mockedButton.textContent = mockedInvertDisabledAttribute();

      return questions[counters.counter].options
        .map((option, index) => answers[index].textContent = option);
    }else{
      return document.body.innerHTML = `<p>Você acertou ${counters.showResults()} perguntas!</p>`
    }
  });

  const mockedLabelClick = { addEventListener: jest.fn() };

  afterEach(() => {
    jest.resetAllMocks();
    mockedButton.disabled = false;

    mockedLabelClick.addEventListener.mockImplementation(() => {
      if(radios.value === questions[counters.counter].answer) {
        return 'acertou!'
      }else {
        return 'errou...'
      }
    });

    mockedInvertDisabledAttribute.mockImplementation(() => {
      if(!mockedButton.disabled) {
        mockedButton.disabled = true;
        return 'Escolha uma resposta.'
      }
  
      mockedButton.disabled = false;
      return 'Próxima pergunta!'
    });

    mockedCheckIfHasQuestionsLeft.mockImplementation(() => {
      if(counters.counter !== questions.length) {
        mockedButton.textContent = mockedInvertDisabledAttribute();
  
        return questions[counters.counter].options
          .map((option, index) => answers[index].textContent = option);
      }else{
        return document.body.innerHTML = `Você acertou ${counters.showResults()} perguntas!`
      }
    })    
  });
  
  test('should return the actual array of questions.', () => {
    expect(mockedCheckIfHasQuestionsLeft()).toStrictEqual(["Apple", "Netscape", "Google"])
  });

  test('the next question button should be disabled in the first call of the function.', () => {
    mockedCheckIfHasQuestionsLeft();
    expect(mockedButton.textContent).toBe('Escolha uma resposta.')
  });

  test('should be able to click the labels', () => {
    mockedLabelClick.addEventListener();
    expect(mockedLabelClick.addEventListener.mock.calls.length).toBe(1)
  });

  test('should return "acertou!" when option is equal to the actual question answer.', () => {
    mockedLabelClick.addEventListener.mockImplementation(() => {
      if(radios[1].value === questions[counters.counter].answer) {
        return 'acertou!'
      }else {
        return 'errou...'
      }
    })
    mockedLabelClick.addEventListener();
    
    expect(mockedLabelClick.addEventListener.mock.results[0].value).toBe('acertou!')
  });

  test('should return "errou..." when option is different to the actual question answer.', () => {
    mockedLabelClick.addEventListener();
    expect(mockedLabelClick.addEventListener.mock.results[0].value).toBe('errou...')
  });

  test('should return all right answers that the user had.', () => {
    counters.incrementCounter();
    counters.incrementCounter();
    counters.incrementCounter();
    counters.incrementCounter();
    counters.incrementRightAnswerCounter();
    counters.incrementRightAnswerCounter();
    expect(mockedCheckIfHasQuestionsLeft()).toBe('Você acertou 2 perguntas!');
  })
});

describe('TESTING_"disableOrEnableButton"_FUNCTION...', () => {
  document.body.innerHTML = `<button id='next-btn' disabled>Escolha uma resposta.</button>`;
  const mockedButton = document.querySelector('#next-btn');

  const mockedInvertDisabledAttribute = jest.fn();

  beforeEach(() => {
    return mockedInvertDisabledAttribute.mockImplementation(() => {
      if(!mockedButton.disabled) {
        mockedButton.disabled = true;
        return 'Escolha uma resposta.'
      }
      mockedButton.disabled = false;
      return 'Próxima pergunta!'
    })
  });  

  afterEach(() => {
    jest.resetAllMocks();
    mockedButton.disabled = true;
  });

  test('should be a mocked function of disableOrEnable.', () => {
    expect(mockedInvertDisabledAttribute._isMockFunction).toBeTruthy()
  });

  test('should be able to call at least 1 time.', () => {
    mockedInvertDisabledAttribute();
    expect(mockedInvertDisabledAttribute).toHaveBeenCalledTimes(1)
  });

  test('should return "Próxima pergunta!" when called once.', () => {
    mockedInvertDisabledAttribute();
    expect(mockedInvertDisabledAttribute.mock.results[0].value).toBe('Próxima pergunta!')
  });

  test('should return "Próxima pergunta!" when the "disabled" invert of true to false.', () => {
    mockedButton.textContent = mockedInvertDisabledAttribute();
    expect(mockedButton.textContent).toBe('Próxima pergunta!')
  });

  test('should return "Escolha uma resposta." when the "disabled" invert of false to true.', () => {
    mockedButton.disabled = false;
    mockedButton.textContent = mockedInvertDisabledAttribute();

    expect(mockedButton.textContent).toBe('Escolha uma resposta.')
  });
});

describe('TESTING_"changeRadioAttributes"_FUNCTION...', () => {
  const answerOptions = jest.fn();

  afterEach(() => {
    jest.resetAllMocks();

    answerOptions.mockImplementation(disabled => {
      return disabled ? disabled = false : disabled = true;
    })
  });

  test('should be a mock function.', () => {
    expect(answerOptions._isMockFunction).toBeTruthy()
  });

  test('should be able to call at least one time.', () => {
    answerOptions();
    expect(answerOptions.mock.calls.length).toBe(1)
  });

  test('should return the opposite of the return value (true).', () => {
    answerOptions(false);
    expect(answerOptions.mock.results[0].value).toBeTruthy()
  });

  test('should return the opposite of the return value (fa;se).', () => {
    answerOptions(true);
    expect(answerOptions.mock.results[0].value).toBeFalsy()
  })
})

describe('TESTING_CLICK_TO_GO_TO_NEXT_QUESTION...', () => {
  const someNewCounters = counterInstance();
  const mockNextBtn = { addEventListener: jest.fn() };

  afterEach(() => {
    jest.resetAllMocks();

    mockNextBtn.addEventListener.mockImplementation(() => {
      someNewCounters.incrementCounter();
      return 'estamos na próxima pergunta!'
    });
  });

  test('should be able to click at the button.', () => {
    mockNextBtn.addEventListener();
    expect(mockNextBtn.addEventListener.mock.calls.length).toBe(1);
  });

  test('should return "estamos na próxima pergunta!" and send me to the next question.', () => {
    mockNextBtn.addEventListener();
    expect(mockNextBtn.addEventListener.mock.results[0].value).toBe('estamos na próxima pergunta!')
  });
})
/**@jest-environment jsdom*/
import { jest } from '@jest/globals';

describe('testing "disableOrEnableButton" function...', () => {
  document.body.innerHTML = `<button id='next-btn' disabled>Escolha uma resposta.</button>`;
  const mockedButton = document.querySelector('#next-btn');

  const mockedInvertDisabledAttribute = jest.fn()

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
})
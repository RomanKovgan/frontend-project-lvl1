import getRandomNumber from '../utils/random.js';
import gameStart from '../index.js';

const RULE = 'What is the result of the expression?';

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return console.log('Wrong operator!');
  }
};

const getAnswerAndQwestion = () => {
  const operators = '*+-';
  const operator = operators[getRandomNumber(2)];

  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();

  const answer = calculate(firstNumber, secondNumber, operator);
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  return { question, answer };
};

const braincalc = () => gameStart(getAnswerAndQwestion, RULE);

export default braincalc;

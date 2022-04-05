import getRandomNumber from '../utils/random.js';

const minForAll = 0;
const maxForOperator = 3;
const maxForNumber = 30;
function getRandomOperator(min, max) {
  const rand = Math.floor(min + Math.random() * (max - min));
  const selectoperators = '*+-';
  return selectoperators[rand];
}
const rule = 'What is the result of the expression?';

function calculate() {
  const firstNumber = getRandomNumber(minForAll, maxForNumber);
  const secondNumber = getRandomNumber(minForAll, maxForNumber);
  const randomOperator = getRandomOperator(minForAll, maxForOperator);
  let correctAnswer = 0;
  if (randomOperator === '+') {
    correctAnswer = firstNumber + secondNumber;
  } else if (randomOperator === '-') {
    correctAnswer = firstNumber - secondNumber;
  } else {
    correctAnswer = firstNumber * secondNumber;
  }
  const question = `${firstNumber} ${randomOperator} ${secondNumber}`;
  return { question, correctAnswer };
}

export { rule, calculate };

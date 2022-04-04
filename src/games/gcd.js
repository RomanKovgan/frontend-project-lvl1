import getRandomNumber from '../utils/random.js';

const rule = 'Find the greatest common divisor of given numbers.';
const minNumber = 1;
const maxNumber = 100;

function gcd() {
  const firstNumber = getRandomNumber(minNumber, maxNumber);
  const secondNumber = getRandomNumber(minNumber, maxNumber);
  let x = firstNumber;
  let y = secondNumber;
  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  const correctAnswer = x;
  const question = `${firstNumber} ${secondNumber}`;
  return { question, correctAnswer };
}

export { rule, gcd };

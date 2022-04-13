import getRandomNumber from '../utils/random.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minNumber = 0;
const maxNumber = 100;

function primeNumber() {
  let correctAnswer = 'yes';
  const number = getRandomNumber(minNumber, maxNumber);
  if (number < 2) {
    correctAnswer = 'no';
  }
  
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      correctAnswer = 'no';
    }
  }
  const question = `${number}`;

  return { question, correctAnswer };
}

export { rule, primeNumber };

import getRandomNumber from '../utils/random.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const minNumber = 0;
const maxNumber = 100;

function evenNumber() {
  const randomNumber = getRandomNumber(minNumber, maxNumber);
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  const question = randomNumber;
  return { question, correctAnswer };
}
export { rule, evenNumber };

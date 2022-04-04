import getRandomNumber from '../utils/random.js';

const rule = 'What number is missing in the progression?';
const minNumber = 0;
const numberToTen = 9;
const maxNumber = 100;

function progression() {
  const randomNumbers = [];
  const firstNumber = getRandomNumber(minNumber, maxNumber);
  const differenceProgression = getRandomNumber(minNumber, maxNumber);
  const index = getRandomNumber(minNumber, numberToTen);
  randomNumbers.push(firstNumber);
  let i = 0;
  while (randomNumbers.length < 10) {
    randomNumbers.push(randomNumbers[i] + differenceProgression);
    i += 1;
  }
  const correctAnswer = randomNumbers[index];
  const randomNumbersUser = randomNumbers;
  randomNumbersUser[index] = '..';
  const question = randomNumbersUser.join(' ');
  return { question, correctAnswer };
}
export { rule, progression };

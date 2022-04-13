import getRandomNumber from '../utils/random.js';

const rule = 'What number is missing in the progression?';
const minNumber = 0;
const maxNumber = 100;
const ARRAY_SIZE = 10;

function progression() {
  const firstNumber = getRandomNumber(minNumber, maxNumber);
  const differenceProgression = getRandomNumber(minNumber, maxNumber);
  const maxIndex = ARRAY_SIZE - 1;
  const index = getRandomNumber(minNumber, maxIndex);
  const randomNumbers = [firstNumber];

  let i = 0;
  while (randomNumbers.length < ARRAY_SIZE) {
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

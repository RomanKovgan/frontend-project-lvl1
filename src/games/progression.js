import getRandomNumber from '../utils/random.js';
import gameStart from '../index.js';

const RULE = 'What number is missing in the progression?';

const getProgression = (firstNumber, commonDiffirence) => {
  const ARRAY_SIZE = 10;
  const arrayOfProgression = [firstNumber];
  for (let i = 1; i < ARRAY_SIZE; i += 1) {
    arrayOfProgression.push(firstNumber + commonDiffirence * i);
  }
  return arrayOfProgression;
};

const getAnswerAndQwestion = () => {
  const firstNumber = getRandomNumber();
  const commonDiffirence = getRandomNumber(20);
  const index = getRandomNumber(9);
  const arrayOfProgression = getProgression(firstNumber, commonDiffirence);
  const answer = String(arrayOfProgression[index]);
  const randomNumbersUser = arrayOfProgression;
  randomNumbersUser[index] = '..';
  const question = randomNumbersUser.join(' ');

  return { question, answer };
};

const brainProgression = () => gameStart(getAnswerAndQwestion, RULE);

export default brainProgression;

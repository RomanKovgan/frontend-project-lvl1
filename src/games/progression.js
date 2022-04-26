import getRandomNumber from '../utils/random.js';
import gameStart from '../index.js';

const RULE = 'What number is missing in the progression?';

const getProgression = (firstNumber, commonDiffirence) => {
  const ARRAY_SIZE = 10;
  const progression = [firstNumber];
  for (let i = 1; i < ARRAY_SIZE; i += 1) {
    progression.push(firstNumber + commonDiffirence * i);
  }
  return progression;
};

const getAnswerAndQuestion = () => {
  const firstNumber = getRandomNumber();
  const commonDiffirence = getRandomNumber(20, 1);
  const index = getRandomNumber(9);
  const progression = getProgression(firstNumber, commonDiffirence);
  const answer = String(progression[index]);
  progression[index] = '..';
  const question = progression.join(' ');
  return { question, answer };
};

export default () => gameStart(getAnswerAndQuestion, RULE);

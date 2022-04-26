import getRandomNumber from '../utils/random.js';
import gameStart from '../index.js';

const RULE = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const getAnswerAndQwestion = () => {
  const randomNumber = getRandomNumber();
  const answer = isEven(randomNumber) ? 'yes' : 'no';
  const question = randomNumber;
  return { question, answer };
};

export default () => gameStart(getAnswerAndQwestion, RULE);

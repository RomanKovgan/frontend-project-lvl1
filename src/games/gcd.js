import getRandomNumber from '../utils/random.js';
import gameStart from '../index.js';

const RULE = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => ((b === 0) ? a : gcd(b, a % b));

const getAnswerAndQwestion = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const answer = String(gcd(firstNumber, secondNumber));
  const question = `${firstNumber} ${secondNumber}`;
  return { question, answer };
};

export default () => gameStart(getAnswerAndQwestion, RULE);

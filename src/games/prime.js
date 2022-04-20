import getRandomNumber from '../utils/random.js';
import gameStart from '../index.js';

const RULE = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

function getAnswerAndQwestion() {
  const number = getRandomNumber();
  const question = `${number}`;
  const answer = isPrime(number) ? 'yes' : 'no';

  return { question, answer };
}

const brainPrime = () => gameStart(getAnswerAndQwestion, RULE);

export default brainPrime;

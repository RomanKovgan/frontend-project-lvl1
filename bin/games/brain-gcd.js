#!/usr/bin/env node

import readlineSync from 'readline-sync';
import gamesStart from '../../src/index.js';
import compare from '../../src/compare.js';
import { getRandomNumber } from '../../src/random.js';

const rules = 'Find the greatest common divisor of given numbers.';

export default function gsd(firstNumber, secondNumber) {
  const minNumber = secondNumber > firstNumber ? firstNumber : secondNumber;
  const maxNumber = secondNumber > firstNumber ? secondNumber : firstNumber;
  if (maxNumber % minNumber === 0) {
    return minNumber;
  }
  for (let i = Math.round(minNumber / 2); i > 1; i -= 1) {
    if ((firstNumber % i === 0) && (secondNumber % i === 0)) {
      return i;
    }
  }
  return 1;
}

function compared() {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const correctAnswer = gsd(firstNumber, secondNumber);
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  const userAnswer = readlineSync.question('Your answer:');
  return compare(userAnswer, correctAnswer);
}

gamesStart(rules, compared);

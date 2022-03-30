#!/usr/bin/env node

import readlineSync from 'readline-sync';
import gamesStart from '../../src/index.js';
import compare from '../../src/compare.js';
import { getRandomNumber } from '../../src/random.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function primeNumber() {
  let flag = true;
  const number = getRandomNumber();
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      flag = false;
    }
  }
  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer:');
  const correctAnswer = flag ? 'yes' : 'no';
  return compare(userAnswer, correctAnswer);
}

gamesStart(rules, primeNumber);

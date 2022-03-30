#!/usr/bin/env node

import readlineSync from 'readline-sync';
import gamesStart from '../../src/index.js';
import compare from '../../src/compare.js';
import { getRandomNumber } from '../../src/random.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

function answered() {
  const randomNumber = getRandomNumber();
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer:');
  return compare(userAnswer, correctAnswer);
}
gamesStart(rules, answered);

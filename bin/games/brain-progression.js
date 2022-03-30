#!/usr/bin/env node

import readlineSync from 'readline-sync';
import gamesStart from '../../src/index.js';
import compare from '../../src/compare.js';
import { getRandomNumber, getRandomNumberToTen } from '../../src/random.js';

const rules = 'What number is missing in the progression?';

function makeExample() {
  const randomNumbers = [];
  const firstNumber = getRandomNumber();
  const differenceProgression = getRandomNumber();
  const index = getRandomNumberToTen();
  randomNumbers.push(firstNumber);
  let i = 0;
  while (randomNumbers.length < 10) {
    randomNumbers.push(randomNumbers[i] + differenceProgression);
    i += 1;
  }
  const correctAnswer = randomNumbers[index];
  const randomNumbersUser = randomNumbers;
  randomNumbersUser[index] = '..';
  console.log(`Question: ${randomNumbersUser.join(' ')}`);
  const userAnswer = readlineSync.question('Your answer:');
  return compare(userAnswer, correctAnswer);
}

gamesStart(rules, makeExample);

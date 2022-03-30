#!/usr/bin/env node

import readlineSync from 'readline-sync';
import gamesStart from '../../src/index.js';
import compare from '../../src/compare.js';
import { getRandomNumber, getRandomOperator } from '../../src/random.js';

const rules = 'What is the result of the expression?';

function makeExample() {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const randomOperator = getRandomOperator();
  let correctAnswer = 0;
  if (randomOperator === '+') {
    correctAnswer = firstNumber + secondNumber;
  } else if (randomOperator === '-') {
    correctAnswer = firstNumber - secondNumber;
  } else {
    correctAnswer = firstNumber * secondNumber;
  }
  console.log(`Question: ${firstNumber} ${randomOperator} ${secondNumber}`);
  const userAnswer = readlineSync.question('Your answer:');
  return compare(userAnswer, correctAnswer);
}

gamesStart(rules, makeExample);

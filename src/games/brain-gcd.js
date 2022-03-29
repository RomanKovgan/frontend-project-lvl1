#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { getRandomNumber } from './random.js';

let userName = '';
function sayHello() {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
}

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

function compare() {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const correctAnswer = gsd(firstNumber, secondNumber);
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  const userAnswer = readlineSync.question('Your answer:');
  if (Number(userAnswer) === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
  return false;
}

function startGame() {
  sayHello();
  console.log('Find the greatest common divisor of given numbers.');
  let count = 0;
  while (count < 3) {
    const isRight = compare();
    if (!isRight) {
      return;
    }
    count += 1;
  }

  console.log(`Congratulations, ${userName}!`);
}

startGame();

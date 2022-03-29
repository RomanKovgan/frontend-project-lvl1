#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { getRandomNumber, getRandomNumberToTen } from './random.js';

// const getRandomNumber = () => Math.floor(1 + Math.random() * (51 - 1));
// const getRandomNumberToTen = () => Math.floor(0 + Math.random() * (9 - 0));
let userName = '';
function sayHello() {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
}

function makeExample() {
  const randomNumbers = [];
  const firstNumber = getRandomNumber();
  const differenceProgression = getRandomNumberToTen();
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
  console.log(`Question: ${randomNumbersUser}`);
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
  console.log('What number is missing in the progression?');
  let count = 0;
  while (count < 3) {
    const isRight = makeExample();
    if (!isRight) {
      return;
    }
    count += 1;
  }

  console.log(`Congratulations, ${userName}!`);
}

startGame();

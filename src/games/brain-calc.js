#!/usr/bin/env node

import readlineSync from 'readline-sync';

let userName = '';
function sayHello() {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
}

function getRandomOperator() {
  const rand = Math.floor(0 + Math.random() * (2 + 1 - 0));
  const selectoperators = '*+-';
  return selectoperators[rand];
}

const getRandomNumber = () => Math.floor(0 + Math.random() * (31 - 0));

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
  if (Number(userAnswer) === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
  return false;
}

function startGame() {
  sayHello();
  console.log('What is the result of the expression?');
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

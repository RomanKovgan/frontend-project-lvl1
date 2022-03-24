#!/usr/bin/env node

import readlineSync from 'readline-sync';

let userName = '';
function sayHello() {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
}

function answered() {
  const randomNumber = Math.floor(Math.random() * 100);
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer:');
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
  return false;
}
function startGame() {
  sayHello();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let count = 0;
  while (count < 3) {
    const isRight = answered();
    if (!isRight) {
      return;
    }
    count += 1;
  }

  console.log(`Congratulations, ${userName}!`);
}

startGame();

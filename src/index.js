import readlineSync from 'readline-sync';
import compare from './utils/compare.js';

export default function gameStart(game, rule) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log(rule);
  for (let i = 1; i <= 3; i += 1) {
    const resultPerStep = game();
    console.log(`Question: ${resultPerStep.question}`);
    const userAnswer = readlineSync.question('Your answer:');
    const correct = compare(userAnswer, resultPerStep.correctAnswer);
    if (!correct) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}

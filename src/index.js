import sayHello from '../src/cli.js';

function gamesStart(rules, ) {
console.log(`Question: ${randomNumber}`);
const userAnswer = readlineSync.question('Your answer:');
if (userAnswer === correctAnswer) {
  console.log('Correct!');
  return true;
}
console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
return false;
}

import readlineSync from 'readline-sync';

const GAME_ROUNDS = 3;

export default function gameStart(game, rule) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log(rule);

  for (let i = 1; i <= GAME_ROUNDS; i += 1) {
    const { question, answer } = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer:');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}

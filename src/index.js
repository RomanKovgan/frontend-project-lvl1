import readlineSync from 'readline-sync';

export default function gameStart(game, rule) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log(rule);
  for (let i = 1; i <= 3; i += 1) {
    const resultPerStep = game();
    console.log(`Question: ${resultPerStep.question}`);
    const userAnswer = readlineSync.question('Your answer:');
    if (String(userAnswer) === String(resultPerStep.correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${resultPerStep.correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log(`Congratulations, ${name}!`);
  }
}

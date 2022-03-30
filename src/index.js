import readlineSync from 'readline-sync';

export default function gamesStart(rules, logics) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log(rules);
  for (let i = 1; i <= 3; i += 1) {
    const isRight = logics();
    if (!isRight) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}

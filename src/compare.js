export default function compare(userAnswer, correctAnswer) {
  // eslint-disable-next-line eqeqeq
  if (userAnswer == correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
}

function getRandomOperator() {
  const rand = Math.floor(0 + Math.random() * (2 + 1 - 0));
  const selectoperators = '*+-';
  return selectoperators[rand];
}

const getRandomNumberToTen = () => Math.floor(1 + Math.random() * (10 - 1));
const getRandomNumber = () => Math.floor(1 + Math.random() * (51 - 1));

export { getRandomNumberToTen, getRandomOperator, getRandomNumber };

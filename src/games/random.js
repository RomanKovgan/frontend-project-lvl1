function getRandomOperator() {
  const rand = Math.floor(0 + Math.random() * (2 + 1 - 0));
  const selectoperators = '*+-';
  return selectoperators[rand];
}

const getRandomNumber = () => Math.floor(1 + Math.random() * (51 - 1));

export { getRandomNumber, getRandomOperator };

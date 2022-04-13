const getRandomNumber = (max = 100, min = 0) => Math.floor(min + Math.random() * (max + 1 - min));
export default getRandomNumber;

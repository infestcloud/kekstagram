const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const checkStringLength = (string, limit) => {
  return string.length < limit;
};

getRandomPositiveInteger(1, 255);

checkStringLength('Hello', 3);

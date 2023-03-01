//получаем рандомное число, которое потом будет индексом в массиве
const getRandomeNum = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//получаем рандомный элемент из массива
const getRandomeNumElem = (arr) => arr[getRandomeNum(0, arr.length)];

//получаем массив уникальных ID
const getRandomeNumId = (cb, length, max) => {
  const randomeIdArr = [];
  while (length > 0) {
    const curr = cb(0, max);
    if (randomeIdArr.indexOf(curr) !== 1) {
      randomeIdArr.push(curr);
    }
    length--;
  }
  return randomeIdArr;
};

const functionList = {
  getRandomeNum,
  getRandomeNumElem,
  getRandomeNumId
};

export { functionList };

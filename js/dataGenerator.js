import { data } from './data.js';
import { functionList } from './util.js';

const {
  COMMENTS_MESSAGES,
  COMMENTS_NAMES,
  DESCRIPTIONS,
  MIN_LIKES,
  MAX_LIKES,
  COMMENTS_LENGTH,
  DESCR_LENGTH,
  AVATAR_LENGTH
} = data;

const {
  getRandomeNum,
  getRandomeNumElem,
  getRandomeNumId,
} = functionList;


// console.log(COMMENTS_NAMES);

//сохраняем массив в отдельную переменную
const idArr = getRandomeNumId(getRandomeNum, COMMENTS_LENGTH, 200);

//шаблон для отдельного камента
const makeComments = (num) => ({
  id: num,
  avatar: `img/avatar-${getRandomeNum(1, AVATAR_LENGTH)}.svg`,
  message: getRandomeNumElem(COMMENTS_MESSAGES),
  name: getRandomeNumElem(COMMENTS_NAMES)
});

//создаем массив комментов
const makeCommentsArr = (length, id) => {
  const commentsArr = [];
  for (let i = 0; i < length; i++) {
    commentsArr.push(makeComments(id[i]));
  }
  return commentsArr;
};

//создаем массив с рандомными каментами рандомной длины
const randomeCommentsArr = () => {
  const randomeList = makeCommentsArr(COMMENTS_LENGTH, idArr);
  randomeList.length = COMMENTS_LENGTH;
  return randomeList;
};

//шаблон для описаний к фото
const makeDescr = (num) => ({
  id: num,
  url: `photos/${num}.jpg`,
  DESCRIPTIONS: DESCRIPTIONS[num],
  likes: getRandomeNum(MIN_LIKES, MAX_LIKES),
  comments: randomeCommentsArr()
});

//функция создания массива из описаний к фото.
const descrGenerator = (length) => {
  const descrArr = [];
  for (let i = 1; i <= length; i++) {
    descrArr.push(makeDescr(i));
  }
  return descrArr;
};

const descrList = () => descrGenerator(DESCR_LENGTH);

export { descrList };

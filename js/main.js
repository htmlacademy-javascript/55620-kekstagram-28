
const DESCRIPTIONS = ['Спасибо большое, Вадим.', 'А как же состояние indeterminate ? По - моему, нужно было бы хотя бы упомянуть, что для полноценного checkbox, нужно будет и стили для этого состояния доделать.', 'Шикарно, спасибо, Вадим.Подача материала и технически и актерски безупречна.Но очень жаль, что вы обидели радиокнопки.Не совсем уж они и такие же, как чекбоксы.', 'Особенно, когда, скажем, чекбокс выполнен как овальное вытянутое окошко с бегающим внутри вправо - влево  шариком, и хочется, для единства стиля, такую же форму  придать ', 'и радиокнопкам.Чтобы при выборе одной радиокнопки кнопка, другая радиокнопка убегала внутри своего окошка в выключенное(левое) положение. ', 'Вроде бы и не особо сложно, но...', 'А можно этот макет взять или как то получить ? Я бы в фигме его хотел посмотреть.', 'Спасибо за видео.Очень полезное', 'Спасибо.Одно но: почему чекбокс спаном ? Это не семантично же) Можно ведь и псевдоэлементом.', 'Спасибо огромное за подробный мануал! Всё разложено по полкам, картина с чекбоксами прояснилась:) Больше не буду хаотично копипастить:)', 'Контент огонь! А если в планах записать видео как сделать кросс браузерное модальное окно ? Которое идеально работает в том числе на iOS / Android.С блокирвой скрола, и ', 'без всяких артефактов', 'Очень круто, Вадим, спасибо!', 'This channel has very important knowledge about frontend.Thanks you for job)', 'Подскажите как так копируете что строка на которой вы находитесь падает сразу ниже ?', 'Все круто! Только у чекбоксов есть еще состояние - неопределенный(indeterminate).', 'И галочки в простом случае можно сделать через наклоненные в 45deg before / after псевдо - элементы.Тогда вообще без svg можно обойтись', 'Вадим, а почему ты не используешь вместо span псевдо - элемент affter для самого инпута ? Есть какие - то проблемы технические, или для наглядности ?', 'При работе с некоторыми компонентами форм современных фреймворков проще стилизовать их при помощи псевоэлементов для того, чтобы не влезать в дефолтные шаблоны форм.', 'почему не вставляешь инлайн свг через спрайт ?', 'Маловато.Надо было добавить информацию как верстать с учетом a11y', 'Так это чего получается, чтобы заинлайнить мне каждый.svg файл, придется руками прогонять через тот сервис по преобразование svg ? А если этих файлов много ? о_О', 'И разве низя обойтись одним opacity: 0; или visibility: hidden; чтобы убрать визуально инпут.Зачем задавать ширину и высоту по 1px, браузер по умолчанию же добавляет ', 'всякие стили и скринридиры нормально такое читают, не ?', 'А зачем.chec__box давать position absolute ? ) Можно Inline - block и тогда никакие паддинги не нужны будут', 'Супер, но вот там еще одно состояние есть) неопределенное ))', 'А есть ли способ кастомно слилизовать нативный select так, что бы не был хуже какого то плагина типа select2, jqueryformstyler или кастомно написаного ?????', 'Ни знал что такое можно в css сделать.Класс! Магия какая - то!'];

const COMMENTS_NAMES = ['Kelsey Henderson', 'Madison Wise', 'Jay Walsh', 'Pablo Salas', 'Ty Reese', 'Taya Bloggs', 'Liana Rivas', 'Cohen Alvarado', 'Enya Watson', 'Inayah Berger', 'Bruce Massey', 'Dawid Stanton', 'Myla Gates', 'Luther Wright', 'Herman Mosley', 'Ricky Santana', 'Darcie Juarez', 'Ismael Richardson', 'Harun Mcintyre', 'Raheem Hendrix', 'Maggie Ochoa', 'Chloe Bender', 'Suzanne Dennis', 'Millicent Robles', 'Annalise O\'Sullivan'];

const COMMENTS_MESSAGES = ['Всё отлично!', 'В целом всё неплохо.Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент ? !'];

const MIN_LIKES = 25;
const MAX_LIKES = 200;
const COMMENTS_LENGTH = 6;
const DESCR_LENGTH = 25;

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

//сохраняем массив в отдельную переменную
const idArr = getRandomeNumId(getRandomeNum, COMMENTS_LENGTH, 200);

//шаблон для отдельного камента
const makeComments = (num) => ({
  id: num,
  avatar: `img/avatar-${getRandomeNum(1, COMMENTS_LENGTH)}.svg`,
  message: getRandomeNumElem(COMMENTS_MESSAGES),
  name: getRandomeNumElem(COMMENTS_NAMES),
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
  const randomeLength = getRandomeNum(1, COMMENTS_LENGTH);
  randomeList.length = randomeLength;
  return randomeList;
};

//шаблон для описаний к фото
const makeDescr = (num) => ({
  id: num,
  url: `photos/${num}.jpg`,
  DESCRIPTIONS: DESCRIPTIONS[num],
  likes: getRandomeNum(MIN_LIKES, MAX_LIKES),
  comments: randomeCommentsArr(),
});

//функция создания массива из описаний к фото.
const descrGenerator = (length) => {
  const descrArr = [];
  for (let i = 1; i <= length; i++) {
    descrArr.push(makeDescr(i));
  }
  return descrArr;
};

descrGenerator(DESCR_LENGTH);

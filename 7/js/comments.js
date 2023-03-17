const commentsBox = document.createDocumentFragment();
const commentsTemplate = document.querySelector('.social__comment');
const commentsContainer = document.querySelector('.social__comments');
const commentCurrentCount = document.querySelector('.comment-current');
const commentsAddBTN = document.querySelector('.comments-loader');
const COMMENT_COUNT = 5;
// let counter = COMMENT_COUNT;

const createComment = (item) => {
  const { avatar, message, name } = item;
  const commentsItem = commentsTemplate.cloneNode(true);
  commentsItem.querySelector('.social__picture').src = avatar;
  commentsItem.querySelector('.social__picture').alt = name;
  commentsItem.querySelector('.social__text').textContent = message;
  return commentsItem;
};
//Пашет только ТУТ и больше нигде. КАК МНЕ ЗАБРАТЬ МАССИВ commentsArr ОТ СЮДА И ПРОКИНУТЬ ДАЛЬШЕ???? Как мне вообще что-то от сюда забрать?????
const createCommentsList = (commentsArr) => {
  commentsArr.forEach((elem) => {
    const singleComment = createComment(elem);
    commentsBox.append(singleComment);
  });
  commentsContainer.append(commentsBox);
  return commentsContainer;
};

const commentsRender = () => {
  //НЕ ПАШЕТ!!! ВЫЗВАНО В Popup.js!!!!!!! С параметром тоже не пашет.
  createCommentsList(commentsArr.slice(0, COMMENT_COUNT));
  // commentsArr - undefined!!!!!
  createCommentsList(commentsArr);
};


const commentBTNHendler = (evt) => {
  evt.preventDefault();
  commentsRender();
};

commentsAddBTN.addEventListener('click', commentBTNHendler);

export const commentsCreation = { createComment, createCommentsList, commentsRender };

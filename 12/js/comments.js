import { state } from './state.js';
const commentsTemplate = document.querySelector('.social__comment');
const commentsAddBTN = document.querySelector('.social__comments-loader');
const commentsBox = document.createDocumentFragment();
const commentsContainer = document.querySelector('.social__comments');
const commentCurrentCount = document.querySelector('.comment-current');

const COMMENT_ADDING = 5;
let COMMENT_COUNT = 5;

const createComment = (item) => {
  const { avatar, message, name } = item;
  const commentsItem = commentsTemplate.cloneNode(true);
  commentsItem.querySelector('.social__picture').src = avatar;
  commentsItem.querySelector('.social__picture').alt = name;
  commentsItem.querySelector('.social__text').textContent = message;
  return commentsItem;
};


const commentRenderList = (list) => {
  list.forEach((elem) => {
    const singleComment = createComment(elem);
    commentsBox.append(singleComment);
  });
  commentsContainer.append(commentsBox);
  return commentsContainer;
};

const commentsListCreate = () => {
  const commentsDataArray = state.currentMediaData;
  const { comments } = commentsDataArray;
  commentsContainer.innerHTML = '';
  const commentsRenderPortion = COMMENT_COUNT < comments.length ? COMMENT_COUNT : comments.length;
  commentCurrentCount.innerHTML = commentsRenderPortion;
  const commentList = comments.slice(0, commentsRenderPortion);
  if (commentsRenderPortion === comments.length) {
    commentsAddBTN.classList.add('hidden');
  }
  commentRenderList(commentList);
};

const commentsAddOnClick = () => {
  const commentsDataArray = state.currentMediaData;
  const { comments } = commentsDataArray;
  COMMENT_COUNT += COMMENT_ADDING;
  if (COMMENT_COUNT >= comments.length) {
    COMMENT_COUNT = comments.length;
  }
  commentsListCreate();
};

//сброс к нулю
const commentInitalRender = () => {
  COMMENT_COUNT = COMMENT_ADDING;
  commentsAddBTN.classList.remove('hidden');
};

const commentBTNHendler = (evt) => {
  evt.preventDefault();
  commentsAddOnClick();
};

commentsAddBTN.addEventListener('click', commentBTNHendler);

export const commentsCreation = { commentsListCreate, commentInitalRender };

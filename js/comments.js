import { state } from './state.js';

const COMMENT_ADDING = 5;
let commentCount = 5;

const commentsTemplate = document.querySelector('.social__comment');
const commentsAddBTN = document.querySelector('.social__comments-loader');
const commentsBox = document.createDocumentFragment();
const commentsContainer = document.querySelector('.social__comments');
const commentCurrentCount = document.querySelector('.comment-current');


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
};

const commentsListCreate = () => {
  const commentsList = state.currentMediaData;
  const { comments } = commentsList;
  commentsContainer.innerHTML = '';
  const commentsRenderPortion = commentCount < comments.length ? commentCount : comments.length;
  commentCurrentCount.innerHTML = commentsRenderPortion;
  const commentList = comments.slice(0, commentsRenderPortion);
  if (commentsRenderPortion === comments.length) {
    commentsAddBTN.classList.add('hidden');
  }
  commentRenderList(commentList);
};

const commentsAddOnClick = () => {
  const commentsList = state.currentMediaData;
  const { comments } = commentsList;
  commentCount += COMMENT_ADDING;
  if (commentCount >= comments.length) {
    commentCount = comments.length;
  }
  commentsListCreate();
};

const commentInitalRender = () => {
  commentCount = COMMENT_ADDING;
  commentsAddBTN.classList.remove('hidden');
};

const loadCommentHandler = (evt) => {
  evt.preventDefault();
  commentsAddOnClick();
};

commentsAddBTN.addEventListener('click', loadCommentHandler);

export const commentsCreation = { commentsListCreate, commentInitalRender };

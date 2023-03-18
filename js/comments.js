const commentsTemplate = document.querySelector('.social__comment');
const commentsAddBTN = document.querySelector('.social__comments-loader');
const commentsBox = document.createDocumentFragment();
const commentsContainer = document.querySelector('.social__comments');
const commentCurrentCount = document.querySelector('.comment-current');

const COMMENT_ADDING = 5;
let commentCount = 5;

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

//как передать или КАМЕНТЫ СЮДА или ФУНКЦИЮ... КУДА?
const commentsAddOnClick = () => {
  commentCount += COMMENT_ADDING;
  const commentsLengthText = +document.querySelector('.comments-count').textContent;
  if (commentCount >= commentsLengthText) {
    commentCount = commentsLengthText;
  }
  // console.log(commentCount);
};

const commentsListCreate = (commentsArr) => {
  commentsContainer.innerHTML = '';
  const commentsRenderPortion = commentCount < commentsArr.length ? commentCount : commentsArr.length;
  commentCurrentCount.innerHTML = commentsRenderPortion;
  const commentList = commentsArr.slice(0, commentsRenderPortion);
  if (commentsRenderPortion === commentsArr.length) {
    commentsAddBTN.classList.add('hidden');
  }
  commentRenderList(commentList);
};

//сброс к нулю
const commentInitalRender = () => {
  commentCount = COMMENT_ADDING;
  commentsAddBTN.classList.remove('hidden');
};

const commentBTNHendler = (evt) => {
  evt.preventDefault();
  commentsAddOnClick();
};

commentsAddBTN.addEventListener('click', commentBTNHendler);

export const commentsCreation = { commentsListCreate, commentInitalRender };

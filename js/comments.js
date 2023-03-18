const commentsTemplate = document.querySelector('.social__comment');
const commentsAddBTN = document.querySelector('.social__comments-loader');
const commentsBox = document.createDocumentFragment();
const commentsContainer = document.querySelector('.social__comments');
const commentCurrentCount = document.querySelector('.comment-current');

const COMMENT_ADDING = 5;
let commentCount = 5;
let commentsDataArray;


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

const commentsListCreate = (commentsArr) => {
  commentsDataArray = commentsArr;
  commentsContainer.innerHTML = '';
  const commentsRenderPortion = commentCount < commentsArr.length ? commentCount : commentsArr.length;
  commentCurrentCount.innerHTML = commentsRenderPortion;
  const commentList = commentsArr.slice(0, commentsRenderPortion);
  if (commentsRenderPortion === commentsArr.length) {
    commentsAddBTN.classList.add('hidden');
  }
  commentRenderList(commentList);
};

const commentsAddOnClick = () => {
  commentCount += COMMENT_ADDING;
  if (commentCount >= commentsDataArray.length) {
    commentCount = commentsDataArray.length;
  }
  commentsListCreate(commentsDataArray, commentCount);
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

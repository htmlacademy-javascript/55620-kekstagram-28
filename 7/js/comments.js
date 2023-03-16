const commentsBox = document.createDocumentFragment();
const commentsTemplate = document.querySelector('.social__comment');
const commentsContainer = document.querySelector('.social__comments');
const commentCurrentCount = document.querySelector('.comment-current');
const commentsAddBTN = document.querySelector('.comments-loader');
const COMMENT_COUNT = 5;
let counter = COMMENT_COUNT;

let commentsDataArray;


const createComment = (item) => {
  const { avatar, message, name } = item;
  const commentsItem = commentsTemplate.cloneNode(true);
  commentsItem.querySelector('.social__picture').src = avatar;
  commentsItem.querySelector('.social__picture').alt = name;
  commentsItem.querySelector('.social__text').textContent = message;
  return commentsItem;
};

const renderComments = (commentsArr) => {
  commentsArr.forEach((elem) => {
    const singleComment = createComment(elem);
    commentsBox.append(singleComment);
  });
  commentsContainer.append(commentsBox);
  return commentsContainer;
};

const commentBTNHendler = (evt) => {
  evt.preventDefault();
  renderComments(commentsDataArray.slice(counter, counter + COMMENT_COUNT));
  counter = counter + COMMENT_COUNT;
  commentCurrentCount.textContent = (counter > commentsDataArray.length) ? commentsDataArray.length : counter;
  if (counter >= commentsDataArray.length) {
    commentsAddBTN.classList.add('hidden');
  }
};

const addComments = (commentsArr) => {
  commentsDataArray = commentsArr;
  if (commentsArr.length <= COMMENT_COUNT) {
    renderComments(commentsArr);
    commentsAddBTN.classList.add('hidden');
    commentCurrentCount.textContent = commentsArr.length;
  } else {
    renderComments(commentsArr.slice(0, COMMENT_COUNT));
    commentCurrentCount.textContent = (counter > commentsArr.length) ? commentsArr.length : counter;
    commentsAddBTN.addEventListener('click', commentBTNHendler);
  }
};

const removeEventLoader = () => {
  counter = COMMENT_COUNT;
  commentsAddBTN.removeEventListener('click', commentBTNHendler);
  commentsAddBTN.classList.remove('hidden');
};


export const commentsCreation = { addComments, removeEventLoader };

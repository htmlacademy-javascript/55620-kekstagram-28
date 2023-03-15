const commentsBox = document.createDocumentFragment();
const commentsTemplate = document.querySelector('.social__comment');

const createComments = (item) => {
  const { avatar, message, name } = item;
  const commentsItem = commentsTemplate.cloneNode(true);
  commentsItem.querySelector('.social__picture').src = avatar;
  commentsItem.querySelector('.social__picture').alt = name;
  commentsItem.querySelector('.social__text').textContent = message;
  return commentsItem;
};

const renderComments = (arrOfElems) => {
  arrOfElems.forEach((elem) => {
    const singleComment = createComments(elem);
    commentsBox.append(singleComment);
  });
  return commentsBox;
};

export const getPopupData = (dataId) => {
  const bigPicture = document.querySelector('.big-picture');
  const { url, likes, comments, DESCRIPTIONS } = dataId;
  const commentsList = renderComments(comments);
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img img').alt = DESCRIPTIONS;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
  bigPicture.querySelector('.social__caption').textContent = DESCRIPTIONS;
  bigPicture.querySelector('.social__comments').append(commentsList);
};

export const clearPopupData = () => {
  const bigPicture = document.querySelector('.big-picture');
  bigPicture.querySelector('.big-picture__img img').src = './';
  bigPicture.querySelector('.big-picture__img img').alt = '';
  bigPicture.querySelector('.likes-count').textContent = 0;
  bigPicture.querySelector('.comments-count').textContent = 0;
  bigPicture.querySelector('.social__caption').textContent = '';
  bigPicture.querySelector('.social__comments').innerHTML = '';
};

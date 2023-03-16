import { functionList } from './utils.js';
import { commentsCreation } from './comments.js';

const { isEscapeKey } = functionList;
const { addComments, removeEventLoader } = commentsCreation;
const bigPicture = document.querySelector('.big-picture');
const closePopupBtn = bigPicture.querySelector('.big-picture__cancel');

//закрыть по ESC
const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeModal();
  }
};

//отрисовка поапа
const getPopupData = (dataId) => {
  bigPicture.querySelector('.social__comments').innerHTML = '';
  const { url, likes, comments, DESCRIPTIONS } = dataId;
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img img').alt = DESCRIPTIONS;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
  bigPicture.querySelector('.social__caption').textContent = DESCRIPTIONS;
  addComments(comments);

};

const clearPopupData = () => {
  bigPicture.querySelector('.big-picture__img img').src = './';
  bigPicture.querySelector('.big-picture__img img').alt = '';
  bigPicture.querySelector('.likes-count').textContent = 0;
  bigPicture.querySelector('.comments-count').textContent = 0;
  bigPicture.querySelector('.social__caption').textContent = '';
  bigPicture.querySelector('.social__comments').innerHTML = '';
};

//открыть модалку
const openModal = (dataId) => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  getPopupData(dataId);
  document.addEventListener('keydown', onDocumentKeydown);
};

//закрыть модалку
function closeModal() {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  clearPopupData();
  removeEventLoader();
  document.removeEventListener('keydown', onDocumentKeydown);
}

closePopupBtn.addEventListener('click', closeModal);

export const popupFunctions = { getPopupData, clearPopupData, closeModal, openModal };

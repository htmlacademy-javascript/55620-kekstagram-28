import { descrList } from './dataGenerator.js';
import { renderPictureList } from './miniatures.js';
import { getPopupData, clearPopupData } from './popup.js';

const miniaturesData = descrList();
const miniaturesContainer = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const closePopupBtn = bigPicture.querySelector('.big-picture__cancel');


//открыть модалку
const openModal = (dataId) => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  getPopupData(dataId);
};

//закрыть модалку
const closeModal = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  clearPopupData();
};

closePopupBtn.addEventListener('click', closeModal);

// делегируем клик на элементы галереи
const miniatureClicEvent = (evt) => {
  evt.preventDefault();
  const targetPic = evt.target.closest('.picture');
  if (!targetPic) {
    return;
  }
  const currentTargetId = miniaturesData[targetPic.dataset.miniature - 1];
  openModal(currentTargetId);
};

//вывод миниатюр
renderPictureList(miniaturesData);

miniaturesContainer.addEventListener('click', miniatureClicEvent);

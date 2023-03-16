import { descrList } from './dataGenerator.js';
import { renderPictureList } from './miniatures.js';
import { popupFunctions } from './popup.js';

const { openModal } = popupFunctions;

const miniaturesData = descrList();
const miniaturesContainer = document.querySelector('.pictures');

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

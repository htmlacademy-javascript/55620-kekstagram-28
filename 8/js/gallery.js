import { setMediaData } from './state.js';
import { descrList } from './dataGenerator.js';
import { renderPictureList } from './miniatures.js';
import { popupFunctions } from './popup.js';

const { openModal } = popupFunctions;

const miniaturesData = descrList();
const miniaturesContainer = document.querySelector('.pictures');

const miniatureClicEvent = (evt) => {
  const targetPic = evt.target.closest('.picture');
  if (evt.target.closest('.picture')) {
    evt.preventDefault();
    setMediaData(miniaturesData[targetPic.dataset.miniature - 1]);
    openModal();
  }
};


//вывод миниатюр
renderPictureList(miniaturesData);

miniaturesContainer.addEventListener('click', miniatureClicEvent);

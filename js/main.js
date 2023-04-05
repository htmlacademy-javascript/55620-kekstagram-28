import './upload-photo.js';
import { state, setMediaData } from './state.js';
import { getMediaData } from './api.js';
import { showErrorDataMessage } from './user-message.js';
import { popupFunctions } from './popup.js';
import { filterFunction } from './filter.js';

const { openModal } = popupFunctions;
const { filterInit } = filterFunction;

const miniaturesContainer = document.querySelector('.pictures');

let miniaturesData = null;

try {
  const mediaData = await getMediaData();
  setMediaData(mediaData);
  miniaturesData = state.currentMediaData;
  filterInit(miniaturesData);
} catch (err) {
  showErrorDataMessage(err.message);
}

const miniatureClicEvent = (evt) => {
  const targetPic = evt.target.closest('.picture');
  if (evt.target.closest('.picture')) {
    evt.preventDefault();
    setMediaData(miniaturesData[targetPic.dataset.miniature]);
    openModal();
  }
};

miniaturesContainer.addEventListener('click', miniatureClicEvent);

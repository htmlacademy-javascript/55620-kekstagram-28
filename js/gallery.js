import { state, setMediaData } from './state.js';
import { getMediaData, sendMediaData } from './api.js';
import { showErrorGetDataMessage } from './user-message.js';
import { renderPictureList } from './miniatures.js';
import { popupFunctions } from './popup.js';

const { openModal } = popupFunctions;

const miniaturesContainer = document.querySelector('.pictures');

let miniaturesData = null;

try {
 const mediaData = await getMediaData();
 setMediaData(mediaData);
 miniaturesData = state.currentMediaData;
 renderPictureList(miniaturesData);
} catch (err) {
 showErrorGetDataMessage(err.message);
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
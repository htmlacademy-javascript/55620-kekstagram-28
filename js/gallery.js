import { state, setMediaData } from './state.js';
import { getMediaData } from './api.js';
import { functionList } from './utils.js';
import { showErrorGetDataMessage } from './user-message.js';
import { renderPictureList } from './miniatures.js';
import { popupFunctions } from './popup.js';
import { filterFunction } from './filter.js';

const { debounce } = functionList;
const { openModal } = popupFunctions;
const { filterInit } = filterFunction;


const miniaturesContainer = document.querySelector('.pictures');

let miniaturesData = null;

try {
  const mediaData = await getMediaData();
  setMediaData(mediaData);
  miniaturesData = state.currentMediaData;
  const debousingGallery = debounce(renderPictureList);
  filterInit(miniaturesData, debousingGallery);
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

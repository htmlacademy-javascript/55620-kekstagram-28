const ZoomConfig = {
  MAX_ZOOM: 100,
  MIN_ZOOM: 25,
  ZOOM_STEP: 25
};

const userPhoto = document.querySelector('.img-upload__preview img');
const zoomOutBTN = document.querySelector('.scale__control--smaller');
const zoomInBTN = document.querySelector('.scale__control--bigger');
const zoomValue = document.querySelector('.scale__control--value');


const zoomingPhotoStyling = () => {
  userPhoto.style.transform = `scale(${parseInt(zoomValue.value, 10) / 100})`;
};

const zoomingBTNClick = (evt) => {
  evt.preventDefault();
  if (parseInt(zoomValue.value, 10) < ZoomConfig.MAX_ZOOM) {
    zoomValue.value = `${parseInt(zoomValue.value, 10) + ZoomConfig.ZOOM_STEP}%`;
    zoomingPhotoStyling();
  }
};

const zoomoutingBTNClick = (evt) => {
  evt.preventDefault();
  if (parseInt(zoomValue.value, 10) > ZoomConfig.MIN_ZOOM) {
    zoomValue.value = `${parseInt(zoomValue.value, 10) - ZoomConfig.ZOOM_STEP}%`;
    zoomingPhotoStyling();
  }
};

const resetZoom = () => {
  zoomValue.value = '100%';
  userPhoto.style = '';
};
zoomInBTN.addEventListener('click', zoomingBTNClick);
zoomOutBTN.addEventListener('click', zoomoutingBTNClick);

export const photoZoom = { resetZoom };

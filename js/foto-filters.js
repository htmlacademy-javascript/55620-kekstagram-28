// const noUISlider = document.querySelector('.effect-level__slider');
const zoomOutBTN = document.querySelector('.scale__control--smaller');
const zoomInBTN = document.querySelector('.scale__control--bigger');
const zoomValue = document.querySelector('.scale__control--value');
const userPhoto = document.querySelector('.img-upload__preview img');


const zoomConfig = {
  MAX_ZOOM: 100,
  MIN_ZOOM: 25,
  ZOOM_STEP: 25
};


/*

При изменении значения поля .scale__control--value изображению внутри .img-upload__preview должен добавляться соответствующий стиль CSS, который с помощью трансформации scale задаёт масштаб. Например, если в поле стоит значение 75%, то в стиле изображения должно быть написано transform: scale(0.75).
*/

const zoomingPhotoStyling = () => {
  userPhoto.style.transform = `scale(${parseInt(zoomValue.value, 10) / 100})`;
};

const zoomingBTNClick = (evt) => {
  evt.preventDefault();
  if (parseInt(zoomValue.value, 10) < zoomConfig.MAX_ZOOM) {
    zoomValue.value = `${parseInt(zoomValue.value, 10) + zoomConfig.ZOOM_STEP}%`;
    zoomingPhotoStyling();
  }
};

const zoomoutingBTNClick = (evt) => {
  evt.preventDefault();
  if (parseInt(zoomValue.value, 10) > zoomConfig.MIN_ZOOM) {
    zoomValue.value = `${parseInt(zoomValue.value, 10) - zoomConfig.ZOOM_STEP}%`;
    zoomingPhotoStyling();
  }
};

const resetZoom = () => {
  zoomValue.value = '100%';
  userPhoto.style = '';
};
zoomInBTN.addEventListener('click', zoomingBTNClick);
zoomOutBTN.addEventListener('click', zoomoutingBTNClick);


export const photoFilters = { resetZoom };

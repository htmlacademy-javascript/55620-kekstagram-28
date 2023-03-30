import { sendMediaData } from './api.js';
import { showSuccessSendDataMessage, showErrorSendDataMessage } from './user-message.js';
import { functionList } from './utils.js';
import { validation } from './validation.js';
import { photoZoom } from './foto-zoom.js';
import { fotoEffects } from './foto-effects.js';

const { pristineValidate, pristineReset } = validation;
const { resetZoom } = photoZoom;
const { resetEffect } = fotoEffects;

const uploadForm = document.querySelector('#upload-select-image');
const uploadFileInput = document.querySelector('#upload-file');
const uploadPopupOverlay = document.querySelector('.img-upload__overlay');
const uploadFileClose = document.querySelector('.img-upload__cancel');
const uploadFileHashtagInput = document.querySelector('.text__hashtags');
const uploadFileDescription = document.querySelector('.text__description');
const uploadFileSubmitBTN = document.querySelector('.img-upload__submit');

const { isEscapeKey } = functionList;

const clearUploadFormData = () => {
  uploadFileHashtagInput.value = '';
  uploadFileDescription.value = '';
  uploadFileInput.value = '';
};

const openUploadForm = () => {
  uploadPopupOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  // console.log(uploadFileInput.value === '')
};

const closeUploadForm = () => {
  uploadPopupOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  clearUploadFormData();
  document.removeEventListener('keydown', onDocumentKeydown);
  pristineReset();
  resetZoom();
  resetEffect();
};


function onDocumentKeydown(evt) {
  const errorPopup = document.querySelector('.error');
  if (!errorPopup && isEscapeKey(evt) &&
    uploadFileHashtagInput !== document.activeElement && uploadFileDescription !== document.activeElement) {
    evt.preventDefault();
    closeUploadForm();
  }
}

function uploadFormSubmit(evt) {
  evt.preventDefault();
  if (pristineValidate()) {
    uploadFileSubmitBTN.disabled = true;
    sendMediaData(new FormData(evt.target))
      .then(showSuccessSendDataMessage)
      .then(() => {
        closeUploadForm();
      })
      .catch(showErrorSendDataMessage)
      .finally(() => {
        uploadFileSubmitBTN.disabled = false;
      });
  }
}

uploadFileInput.addEventListener('change', openUploadForm);
uploadFileClose.addEventListener('click', closeUploadForm);
uploadForm.addEventListener('submit', uploadFormSubmit);
import { functionList } from './utils.js';
import { pristineValidate, pristineReset } from './validation.js';

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
};

const closeUploadForm = () => {
  uploadPopupOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  clearUploadFormData();
  document.removeEventListener('keydown', onDocumentKeydown);
  pristineReset();
};

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt) &&
    uploadFileHashtagInput !== document.activeElement && uploadFileDescription !== document.activeElement) {
    evt.preventDefault();
    closeUploadForm();
  }
}

function uploadFormSubmit(evt) {
  if (!pristineValidate()) {
    evt.preventDefault();
    uploadFileSubmitBTN.disabled = true;
  }
  uploadFileSubmitBTN.disabled = false;
}

uploadFileInput.addEventListener('change', openUploadForm);
uploadFileClose.addEventListener('click', closeUploadForm);
uploadForm.addEventListener('submit', uploadFormSubmit);

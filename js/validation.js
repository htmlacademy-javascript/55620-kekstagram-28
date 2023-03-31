const uploadForm = document.querySelector('#upload-select-image');

const REGEXP = /^#[a-zа-яё0-9]{1,19}$/i;
const HASHTAG_LENGTH = 5;
const MESSAGE_LENGTH = 140;
const ErrorMessages = {
  textareaErrorMessage: `Длина коментария ограничена ${MESSAGE_LENGTH} символами.`,
  hashSimbolError: 'У тегов должен быть знак "решетка" - # - и еще минимум один символ',
  hashlengthError: `Не более ${HASHTAG_LENGTH} тегов на фото`,
  hashUnicError: 'Повтор тегов запрещен',
};

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'p',
  errorTextClass: 'img-upload__error',
});


const uploadFormTextareaValidate = (value) => value.length < MESSAGE_LENGTH;

pristine.addValidator(
  uploadForm.querySelector('.text__description'),
  uploadFormTextareaValidate,
  ErrorMessages.textareaErrorMessage);

/*HASHTAG */

const uploadFormHashtagArray = (hashtags) => hashtags.trim().toLowerCase().split(' ').filter(Boolean);

const uploadFormHashtagLengthChecking = (hashtags) => {
  const hashtagArray = uploadFormHashtagArray(hashtags);
  return hashtagArray.length <= HASHTAG_LENGTH;
};

const uploadFormHashtagHashSimbolChecking = (hashtags) => {
  const hashtagArray = uploadFormHashtagArray(hashtags);
  if (hashtags.length === 0) {
    return true;
  }
  return hashtagArray.every((tag) => REGEXP.test(tag));
};

const uploadFormHashtagUnicCheckinh = (hashtags) => {
  const hashtagArray = uploadFormHashtagArray(hashtags);
  const dataSetArray = new Set(hashtagArray);
  return hashtagArray.length === dataSetArray.size;
};

pristine.addValidator(
  uploadForm.querySelector('.text__hashtags'),
  uploadFormHashtagHashSimbolChecking,
  ErrorMessages.hashSimbolError);

pristine.addValidator(
  uploadForm.querySelector('.text__hashtags'),
  uploadFormHashtagLengthChecking,
  ErrorMessages.hashlengthError);

pristine.addValidator(
  uploadForm.querySelector('.text__hashtags'),
  uploadFormHashtagUnicCheckinh,
  ErrorMessages.hashUnicError);

const pristineValidate = () => pristine.validate();
const pristineReset = () => pristine.reset();

export const validation = { pristineValidate, pristineReset };

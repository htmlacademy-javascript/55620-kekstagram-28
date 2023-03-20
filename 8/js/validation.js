const uploadForm = document.querySelector('#upload-select-image');

const REGEXP = /^#[a-zа-яё0-9]{1,19}$/i;
const HASHTAG_LENGTH = 5;

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'p',
  errorTextClass: 'img-upload__error',
});


const uploadFormTextareaValidate = (value) => value.length < 140;

pristine.addValidator(
  uploadForm.querySelector('.text__description'),
  uploadFormTextareaValidate,
  'Длина коментария не более 140 символов.',
);

/*HASHTAG */

const uploadFormHashtagArray = (hashtags) => hashtags.trim().split(' ');

const uploadFormHashtagLengthChecking = (hashtags) => {
  const hashtagArray = uploadFormHashtagArray(hashtags);
  return hashtagArray.length <= HASHTAG_LENGTH;
};

const uploadFormHashtagHashSimbolChecking = (hashtags) => {
  const hashtagArray = uploadFormHashtagArray(hashtags);
  return hashtagArray.every((tag) => REGEXP.test(tag));
};

pristine.addValidator(
  uploadForm.querySelector('.text__hashtags'),
  uploadFormHashtagHashSimbolChecking,
  'Проверте наличие знака "решетка" - # - у ваших тегов'
);


pristine.addValidator(
  uploadForm.querySelector('.text__hashtags'),
  uploadFormHashtagLengthChecking,
  'Не более 5 тегов'
);

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

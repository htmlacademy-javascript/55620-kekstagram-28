import { functionList } from './utils.js';

const userMessageError = document.querySelector('#error').content
  .querySelector('.error');
const userMessageSuccess = document.querySelector('#success').content
  .querySelector('.success');

const { isEscapeKey } = functionList;


//ошибка получения данных
const showErrorGetDataMessage = (error) => {
  const messageTemp = userMessageError.cloneNode(true);
  messageTemp.querySelector('.error__title').textContent = error;
  document.addEventListener('keydown', onDocumentKeydownError);
  messageTemp.querySelector('.error__button').classList.add('hidden');
  document.body.append(messageTemp);
  setTimeout(() => {
    messageTemp.remove();
  }, 2000);
};


//ошибка отправки данных
const closeErrorPopupMessage = () => {
  document.querySelector('.error').remove();
  document.removeEventListener('keydown', onDocumentKeydownError);
};


const showErrorSendDataMessage = () => {
  document.addEventListener('keydown', onDocumentKeydownError);
  const messageTemp = userMessageError.cloneNode(true);
  messageTemp.querySelector('.error__button').addEventListener('click', closeErrorPopupMessage);
  document.body.append(messageTemp);
};

function onDocumentKeydownError(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeErrorPopupMessage();
  }
}


//успешно отправлено

const closeSuccessPopupMessage = () => {
  document.querySelector('.success').remove();
  document.removeEventListener('keydown', onDocumentKeydownSuccess);
};

const showSuccessSendDataMessage = () => {
  const messageTemp = userMessageSuccess.cloneNode(true);
  document.addEventListener('keydown', onDocumentKeydownSuccess);
  messageTemp.querySelector('.success__button').addEventListener('click', closeSuccessPopupMessage);
  document.body.append(messageTemp);
};


function onDocumentKeydownSuccess(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeSuccessPopupMessage();
  }
}

export { showErrorGetDataMessage, showSuccessSendDataMessage, showErrorSendDataMessage };

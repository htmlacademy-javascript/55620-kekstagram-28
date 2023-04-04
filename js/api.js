const BASE_URL = 'https://28.javascript.pages.academy/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const ErrorText = {
  GET_DATA: 'Не удалось загрузить данные. Попробуйте обновить страницу',
  SEND_DATA: 'Не удалось отправить форму. Попробуйте ещё раз',
};

const loadingData = (route, errorText, method = 'GET', body = null) =>
  fetch(`${BASE_URL}${route}`, { method, body })
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      throw new Error(errorText);
    });

const getMediaData = () => loadingData(Route.GET_DATA, ErrorText.GET_DATA);

const sendMediaData = (body) => loadingData(Route.SEND_DATA, ErrorText.SEND_DATA, 'POST', body);

export { getMediaData, sendMediaData };

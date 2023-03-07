import { descrList } from './functions.js';

/*
Задача
Отобразить фотографии других пользователей.
+ Заведите модуль, который будет отвечать за отрисовку миниатюр.

На основе временных данных для разработки и шаблона #picture создайте DOM-элементы, соответствующие фотографиям, и заполните их данными:
    Адрес изображения url подставьте как атрибут src изображения.
    Количество лайков likes выведите в блок .picture__likes.
    Количество комментариев comments выведите в блок .picture__comments.
Отрисуйте сгенерированные DOM-элементы в блок .pictures. Для вставки элементов используйте DocumentFragment.

+ Подключите модуль в проект.
*/

const miniaturesContainer = document.querySelector('.pictures');
const miniaturesTemplate = document.querySelector('#picture').content
  .querySelector('.picture');
const miniaturesFragment = document.createDocumentFragment();
const miniaturesData = descrList();

const createMiniature = (data) => {
  const { url, likes, comments } = data;
  const singleMiniature = miniaturesTemplate.cloneNode(true);
  singleMiniature.querySelector('.picture__img').src = url;
  singleMiniature.querySelector('.picture__comments').textContent = comments.length;
  singleMiniature.querySelector('.picture__likes').textContent = likes;
  return singleMiniature;
};

miniaturesData.forEach((elem) => {
  const singleMiniature = createMiniature(elem);
  miniaturesFragment.append(singleMiniature);
});

miniaturesContainer.append(miniaturesFragment);

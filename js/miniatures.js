
const miniaturesContainer = document.querySelector('.pictures');
const miniaturesTemplate = document.querySelector('#picture').content
  .querySelector('.picture');
const miniaturesFragment = document.createDocumentFragment();

const createMiniature = (data) => {
  const { url, likes, comments, id } = data;
  const singleMiniature = miniaturesTemplate.cloneNode(true);
  singleMiniature.querySelector('.picture__img').src = url;
  singleMiniature.querySelector('.picture__comments').textContent = comments.length;
  singleMiniature.querySelector('.picture__likes').textContent = likes;
  singleMiniature.dataset.miniature = id;
  return singleMiniature;
};

export const renderPictureList = (arrOfElems) => {
  arrOfElems.forEach((elem) => {
    const singleMiniature = createMiniature(elem);
    miniaturesFragment.append(singleMiniature);
  });
  miniaturesContainer.append(miniaturesFragment);
};

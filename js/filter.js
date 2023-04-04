import { functionList } from './utils.js';
import { renderPictureList } from './miniatures.js';

const { debounce } = functionList;

const MINIATURE_COUNT = 10;
const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

let filterCurrent = Filter.DEFAULT;

const filterContainer = document.querySelector('.img-filters');

const sortByRandom = () => Math.random() - 0.5;
const sortByDiscussed = (a, b) => b.comments.length - a.comments.length;
const debousingGallery = debounce(renderPictureList);


const filterMiniatures = (mediaData) => {
  const miniatuteArray = [...mediaData];
  switch (filterCurrent) {
    case Filter.RANDOM:
      return [...miniatuteArray].sort(sortByRandom).slice(0, MINIATURE_COUNT);
    case Filter.DISCUSSED:
      return [...miniatuteArray].sort(sortByDiscussed);
    default:
      return [...miniatuteArray];
  }
};

const chooseFilter = (mediaData) => {
  filterContainer.classList.remove('img-filters--inactive');
  filterContainer.addEventListener('click', (evt) => {
    const currentBTN = evt.target.closest('.img-filters__button');
    if (!currentBTN) {
      return;
    }
    if (currentBTN.id === filterCurrent) {
      return;
    }
    filterContainer.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    currentBTN.classList.add('img-filters__button--active');
    filterCurrent = currentBTN.id;
    debousingGallery(filterMiniatures(mediaData));
  });
};


const filterInit = (mediaData) => {
  renderPictureList(mediaData);
  chooseFilter(mediaData);
};

export const filterFunction = { filterInit, filterMiniatures };

import { functionList } from './utils.js';
import { renderPictureList } from './miniatures.js';

const MINIATURE_COUNT = 10;
const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};
const { debounce } = functionList;

const filterContainer = document.querySelector('.img-filters');
let filterCurrent = Filter.DEFAULT;

const sortingByRandom = () => Math.random() - 0.5;
const sortingByDiscussed = (a, b) => b.comments.length - a.comments.length;
const debousingGallery = debounce(renderPictureList);


const filteringMiniatures = (mediaData) => {
  const miniatuteArray = [...mediaData];
  switch (filterCurrent) {
    case Filter.RANDOM:
      return [...miniatuteArray].sort(sortingByRandom).slice(0, MINIATURE_COUNT);
    case Filter.DISCUSSED:
      return [...miniatuteArray].sort(sortingByDiscussed);
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
    debousingGallery(filteringMiniatures(mediaData));
  });
};


const filterInit = (mediaData) => {
  renderPictureList(mediaData);
  chooseFilter(mediaData);
};

export const filterFunction = { filterInit, filteringMiniatures };

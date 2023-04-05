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
  const miniatutesArray = [...mediaData];
  switch (filterCurrent) {
    case Filter.RANDOM:
      return [...miniatutesArray].sort(sortByRandom).slice(0, MINIATURE_COUNT);
    case Filter.DISCUSSED:
      return [...miniatutesArray].sort(sortByDiscussed);
    default:
      return [...miniatutesArray];
  }
};

const chooseFilter = (mediaData) => {
  filterContainer.classList.remove('img-filters--inactive');
  filterContainer.addEventListener('click', (evt) => {
    const currentFilterIter = evt.target.closest('.img-filters__button');
    if (!currentFilterIter) {
      return;
    }
    if (currentFilterIter.id === filterCurrent) {
      return;
    }
    filterContainer.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    currentFilterIter.classList.add('img-filters__button--active');
    filterCurrent = currentFilterIter.id;
    debousingGallery(filterMiniatures(mediaData));
  });
};


const filterInit = (mediaData) => {
  renderPictureList(mediaData);
  chooseFilter(mediaData);
};

export const filterFunction = { filterInit, filterMiniatures };

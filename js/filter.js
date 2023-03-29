const MINIATURE_COUNT = 10;
const Filter = {
  DEFAULT: 'filter -default',
  RANDOME: 'filter-random',
  DISCUSSED: 'filter-discussed',
};
const filterContainer = document.querySelector('.img-filters');
let filterCurrent = Filter.DEFAULT;
let miniatuteArray = [];

const sortingByRandom = () => Math.random() - 0.5;
const sortingByDiscussed = (a, b) => b.comments.length - a.comments.length;

const filteringMiniatures = () => {
  switch (filterCurrent) {
    case Filter.RANDOME:
      return [...miniatuteArray].sort(sortingByRandom).slice(0, MINIATURE_COUNT);
    case Filter.DISCUSSED:
      return [...miniatuteArray].sort(sortingByDiscussed);
    default:
      return [...miniatuteArray];
  }
};

const chooseFilter = (cb) => {
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
    cb(filteringMiniatures());
  });
};


const filterInit = (mediaData, cb) => {
  filterContainer.classList.remove('img-filters--inactive');
  miniatuteArray = [...mediaData];
  chooseFilter(cb);
};


export const filterFunction = { filterInit, filteringMiniatures };

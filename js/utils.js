const isEscapeKey = (evt) => evt.key === 'Escape';

const debounce = (callback) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), 500);
  };
};

const functionList = { isEscapeKey, debounce };

export { functionList };

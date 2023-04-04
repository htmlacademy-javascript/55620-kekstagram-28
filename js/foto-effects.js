const effectSliderContainer = document.querySelector('.img-upload__effect-level');
const effectsSlider = document.querySelector('.effect-level__slider');
const userPhoto = document.querySelector('.img-upload__preview img');
const effectsList = document.querySelector('.effects__list');
const effectInput = document.querySelector('.effect-level__value');

const Effects = {
  none: {
    filter: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: '',
  },
  chrome: {
    filter: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  sepia: {
    filter: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  marvin: {
    filter: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  phobos: {
    filter: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  heat: {
    filter: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
};

const hideSlider = (val) => val ? effectSliderContainer.classList.add('hidden') : effectSliderContainer.classList.remove('hidden');

noUiSlider.create(effectsSlider, {
  range: {
    min: Effects.none.min,
    max: Effects.none.max
  },
  start: Effects.none.max,
  step: Effects.none.step,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});
hideSlider(true);

const updateEffectSlider = (effect) => {
  effectsSlider.noUiSlider.updateOptions({
    range: {
      min: Effects[effect].min,
      max: Effects[effect].max
    },
    start: Effects[effect].max,
    step: Effects[effect].step,
    connect: 'lower',
  });
  effectsSlider.noUiSlider.on('update', () => {
    const effectValue = effectsSlider.noUiSlider.get();
    effectInput.value = effectValue;
    userPhoto.style.filter = `${Effects[effect].filter}(${effectValue + Effects[effect].unit})`;
    if (Effects[effect].filter === 'none') {
      userPhoto.style.filter = null;
    }
  });
};

const resetEffect = () => {
  userPhoto.className = '';
  hideSlider(true);
  document.querySelector('#effect-none').checked = true;
  updateEffectSlider('none');
};

const chooseEffectonClick = (evt) => {
  if (!evt.target.closest('.effects__radio')) {
    return;
  }
  const effect = evt.target.value;
  userPhoto.classList = '';
  if (effect !== 'none') {
    hideSlider(false);
    userPhoto.classList.add(`effects__preview--${effect}`);
  } else {
    resetEffect();
    effectInput.value = 100;
    effectsSlider.noUiSlider.set(Effects['none'].max);
  }
  updateEffectSlider(effect);
};

effectsList.addEventListener('change', chooseEffectonClick);

export const fotoEffects = { resetEffect };

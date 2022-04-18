const preview = document.querySelector('.preview');
const onListItemClick = document.querySelector('.effects__list');
const slider = document.querySelector('.effect-level__slider');
const sliderForm = document.querySelector('.img-upload__effect-level');
const userModalCloseElement = document.querySelector('#upload-cancel');

const effectsConfig = {
  none: {
    sliderOptions: {
      start: 0,
      range: {
        min: 0,
        max: 1
      },
      step: 0.1
    },
    getFilterValue: () => ''
  },
  chrome: {
    sliderOptions: {
      start: 0,
      range: {
        min: 0,
        max: 1
      },
      step: 0.1
    },
    getFilterValue: (value) => `grayscale(${value})`
  },
  sepia: {
    sliderOptions: {
      start: 0,
      range: {
        min: 0,
        max: 1
      },
      step: 0.1
    },
    getFilterValue: (value) => `sepia(${value})`
  },
  marvin: {
    sliderOptions: {
      start: 0,
      range: {
        min: 0,
        max: 100
      },
      step: 1
    },
    getFilterValue: (value) => `invert(${value}%)`
  },
  phobos: {
    sliderOptions: {
      start: 0,
      range: {
        min: 0,
        max: 3
      },
      step: 0.1
    },
    getFilterValue: (value) => `blur(${value}px)`
  },
  heat: {
    sliderOptions: {
      start: 0,
      range: {
        min: 1,
        max: 3
      },
      step: 0.1
    },
    getFilterValue: (value) => `brightness(${value})`
  }
};

noUiSlider.create(slider, effectsConfig.none.sliderOptions);

slider.noUiSlider.on('update', (values) => {
  const currentEffectName = document.querySelector('.effects__list input:checked').value;
  const createFilterValue = effectsConfig[currentEffectName].getFilterValue;
  preview.style.filter = createFilterValue(values[0]);
  if (currentEffectName === 'none') {
    sliderForm.classList.add('hidden');
  }
  if (currentEffectName !== 'none') {
    sliderForm.classList.remove('hidden');
  }
});

onListItemClick.addEventListener('change', (e) => {
  const effectName = e.target.value;
  preview.className = '';
  preview.classList.add(`effects__preview--${effectName}`);
  const options = effectsConfig[effectName].sliderOptions;
  preview.value = effectName;
  slider.noUiSlider.updateOptions(
    options,
    true
  );
});

userModalCloseElement.addEventListener('click', () => {
  preview.className = '';
  preview.classList.add('effects__preview--none');
  slider.noUiSlider.updateOptions(effectsConfig.none.sliderOptions);
});

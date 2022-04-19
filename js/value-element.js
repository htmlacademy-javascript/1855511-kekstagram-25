const MAX_SCALE = 100;
const MIN_SCALE = 25;

const smallerElement = document.querySelector('.scale__control--smaller');
const valueElement = document.querySelector('.scale__control--value');
const biggerElement = document.querySelector('.scale__control--bigger');
const valueStylePicturie = document.querySelector('.img-upload__preview');
const userModalCloseElement = document.querySelector('#upload-cancel');
const sliderForm = document.querySelector('.img-upload__effect-level');

valueElement.value = `${MAX_SCALE}%`;


biggerElement.addEventListener('click', ()=> {
  let nextValue = parseInt(valueElement.value, 10) + MIN_SCALE;
  if (nextValue > MAX_SCALE) {
    nextValue = MAX_SCALE;
  }
  valueStylePicturie.style.transform=`scale(${nextValue/MAX_SCALE})`;
  valueElement.value = `${nextValue}%`;
});

smallerElement.addEventListener('click', ()=> {
  let previousValue = parseInt(valueElement.value, 10) - MIN_SCALE;
  if (previousValue < MIN_SCALE) {
    previousValue = MIN_SCALE;
  }
  valueStylePicturie.style.transform=`scale(${previousValue/MAX_SCALE})`;
  valueElement.value = `${previousValue}%`;
});

export const defaultStylePicturie = () => {
  valueStylePicturie.style.transform=`scale(${1})`;
  sliderForm.classList.add('hidden');
  valueElement.value = `${MAX_SCALE}%`;
};

userModalCloseElement.addEventListener('click', () => {
  defaultStylePicturie();
});

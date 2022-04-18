const smallerElement = document.querySelector('.scale__control--smaller');
const valueElement = document.querySelector('.scale__control--value');
const biggerElement = document.querySelector('.scale__control--bigger');
const valueStylePicturie = document.querySelector('.img-upload__preview');
const userModalCloseElement = document.querySelector('#upload-cancel');
const sliderForm = document.querySelector('.img-upload__effect-level');

valueElement.value = `${100}%`;

const MAX_SCALE = 100;
const MIN_SCALE = 25;

biggerElement.addEventListener('click', ()=> {
  let nextValue = parseInt(valueElement.value, 10) + 25;
  if (nextValue > MAX_SCALE) {
    nextValue = MAX_SCALE;
  }
  valueStylePicturie.style.transform=`scale(${nextValue/100})`;
  valueElement.value = `${nextValue}%`;
});

smallerElement.addEventListener('click', ()=> {
  let previousValue = parseInt(valueElement.value, 10) - 25;
  if (previousValue < MIN_SCALE) {
    previousValue = MIN_SCALE;
  }
  valueStylePicturie.style.transform=`scale(${previousValue/100})`;
  valueElement.value = `${previousValue}%`;
});

export const defaultStylePicturie = () => {
  valueStylePicturie.style.transform=`scale(${1})`;
  sliderForm.classList.add('hidden');
  valueElement.value = `${100}%`;
};

userModalCloseElement.addEventListener('click', () => {
  defaultStylePicturie();
});

const form = document.getElementById('upload-select-image');
const validator = window.validator = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text',
});

const hashRegex = /^#[A-Za-zА-яа-яЕё0-9]{1,19}$/;

validator.addValidator(
  document.querySelector('[name="hashtags"]'),
  (value) => { if(!value) {
    return true
      .trim()
      .split(' ')
      .filter((tag) => tag !== '')
      .every((tag) => hashRegex.test(tag));}},
);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (validator.validate()) {
    console.log('true');
  } else {
    console.log('false');
  }
});

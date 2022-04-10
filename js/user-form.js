const form = document.getElementById('upload-select-image');
const validator = window.validator = new Pristine(form, {
  classTo: 'pristine-message',
  errorTextParent: 'pristine-message'
});

const hashRegex = /^#[A-Za-zА-яа-яЕё0-9]{1,19}$/;

validator.addValidator(
  document.querySelector('[name="hashtags"]'),
  (value) => { if(!value) {
    return value
      .trim()
      .split(' ')
      .filter((tag) => tag !== '')
      .every((tag) => hashRegex.test(tag));}},
);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validator.validate();
});

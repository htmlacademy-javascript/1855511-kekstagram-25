import {sendData} from './api.js';
import {renderMessageOk} from './message.js';
import {renderMessageError} from './message.js';

const form = document.getElementById('upload-select-image');
const submitButton = document.querySelector('#upload-submit');

const validator = window.validator = new Pristine(form, {
  classTo: 'pristine-message',
  errorTextParent: 'pristine-message'
});

const hashRegex = /^#[A-Za-zА-яа-яЕё0-9]{1,19}$/;

validator.addValidator(
  document.querySelector('[name="hashtags"]'),
  (value) => {
    if(!value) {
      return true;
    }

    return value
      .trim()
      .split(' ')
      .filter((tag) => tag !== '')
      .every((tag) => hashRegex.test(tag));
  },
  'Неверный формат хештега'
);

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Сохраняю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Сохранить';
};

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validator.validate()) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          unblockSubmitButton();
          renderMessageOk();
        },
        () => {
          renderMessageError();
          unblockSubmitButton();
        },
        new FormData(e.target),
      );
    }
  });
};

export {setUserFormSubmit};

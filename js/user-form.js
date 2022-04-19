import {sendData} from './api.js';
import {showMessageOk} from './message.js';
import {showMessageError} from './message.js';
import {setDefaultEffect} from './effects.js';
import {defaultStylePicturie} from './value-element.js';

const userModalOpenElement = document.querySelector('#upload-file');
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

    const tags = value
      .trim()
      .split(' ')
      .filter((tag) => tag !== '');

    const tagsSet = new Set(tags);

    if (tags.length !== tagsSet.size) {
      return false;
    }

    return tags.every((tag) => hashRegex.test(tag));
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
          setDefaultEffect();
          defaultStylePicturie();
          userModalOpenElement.value = '';
          showMessageOk();
          unblockSubmitButton();
        },
        () => {
          onSuccess();
          setDefaultEffect();
          defaultStylePicturie();
          showMessageError();
          unblockSubmitButton();
        },
        new FormData(e.target),
      );
    }
  });
};

export {setUserFormSubmit};

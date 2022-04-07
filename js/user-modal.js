import {isEscapeKey} from './until.js';
import {isEnterKey} from './until.js';

const userModalElement = document.querySelector('.img-upload__overlay');
const userModalOpenElement = document.querySelector('#upload-file');
const userModalCloseElement = document.querySelector('#upload-cancel');
const bodyModalOpen = document.querySelector('body');

function openUserModal () {
  userModalElement.classList.remove('hidden');
  bodyModalOpen.classList.add('modal-open');

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      userModalElement.classList.add('hidden');
    }
  });
}

function closeUserModal () {
  userModalElement.classList.add('hidden');
  bodyModalOpen.classList.remove('modal-open');

  document.removeEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      userModalElement.classList.add('hidden');
    }
  });
}

userModalOpenElement.addEventListener('change', () => {
  openUserModal();
});

userModalOpenElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    openUserModal();
  }
});

userModalCloseElement.addEventListener('click', () => {
  closeUserModal();
});

userModalCloseElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeUserModal();
  }
});

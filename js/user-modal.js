import {isEnterKey, isEscapeKey} from './until.js';

const userModalElement = document.querySelector('.img-upload__overlay');
const userModalOpenElement = document.querySelector('#upload-file');
const userModalCloseElement = document.querySelector('#upload-cancel');
const bodyModalOpen = document.querySelector('body');
const userFocusHashtags = document.querySelector('.text__hashtags');
const userFocusDescription = document.querySelector('.text__description');
const sliderForm = document.querySelector('.img-upload__effect-level');

function openUserModal () {
  userModalElement.classList.remove('hidden');
  bodyModalOpen.classList.add('modal-open');
  sliderForm.classList.add('hidden');
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

userFocusHashtags.addEventListener('keydown', (e) => { e.stopPropagation(); });
userFocusDescription.addEventListener('keydown', (e) => { e.stopPropagation(); });

userModalOpenElement.addEventListener('change', () => {
  openUserModal();
  document.querySelector('.success').classList.add('hidden');
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

export {openUserModal, closeUserModal};

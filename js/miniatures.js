import {isEscapeKey} from './until.js';
import {getData} from './api.js';
import {isEnterKey} from './until.js';

const bodyModalOpen = document.querySelector('body');
const userPhotoElement = document.querySelector('.big-picture');
const commentsElement = document.querySelector('.social__comments');

const renderPicture = (picture) => {
  const node = document.querySelector('#picture').content.querySelector('.picture').cloneNode(true);
  node.querySelector('.picture__img').setAttribute('src', picture.url);
  node.querySelector('.picture__comments').textContent = picture.comments.length;
  node.querySelector('.picture__likes').textContent = picture.likes;
  node.querySelector('.picture__info').nodeValue = picture.comments;
  node.dataset.id = picture.id;
  return node;
};

const renderCommentElement = (comment) => {
  const node = document.querySelector('#comment').content.querySelector('.social__comment').cloneNode(true);
  node.querySelector('.social__picture').setAttribute('src', comment.avatar);
  node.querySelector('.social__picture').setAttribute('alt', comment.name);
  node.querySelector('.social__text').textContent = comment.message;
  return node;
};

const keyCloseHandler = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    userPhotoElement.classList.add('hidden');
    bodyModalOpen.classList.remove('modal-open');
  }
};

function openUserPhoto () {
  userPhotoElement.classList.remove('hidden');
  bodyModalOpen.classList.add('modal-open');
  document.querySelector('.social__comment-count').classList.add('hidden');
  document.querySelector('.comments-loader').classList.add('hidden');
  document.addEventListener('keydown', keyCloseHandler);
}

function closeUserPhoto () {
  userPhotoElement.classList.add('hidden');
  bodyModalOpen.classList.remove('modal-open');
  document.removeEventListener('keydown', keyCloseHandler);
}

const renderComments = (comment) => {
  const fragmentComments = document.createDocumentFragment();
  comment.forEach((comments) => {
    fragmentComments.appendChild(renderCommentElement(comments));
  });
  return fragmentComments;
};

document.querySelector('.pictures').addEventListener('click', (e) => {
  const photoEl = e.target.closest('.picture');

  if (photoEl) {
    const id = Number(photoEl.dataset.id);
    getData().then((photos) => {
      const photoObj = photos.find((p) => p.id === id);

      openUserPhoto ();
      document.querySelector('.big-picture__img img').setAttribute('src', photoObj.url);
      document.querySelector('.comments-count').textContent = photoObj.comments.length;
      document.querySelector('.likes-count').textContent = photoObj.likes;
      document.querySelector('.social__caption').textContent = photoObj.description;
      commentsElement.textContent = '';
      const SIMILAR_PHOTOS_COUNT = 5;
      commentsElement.appendChild(renderComments(photoObj.comments.slice(0, SIMILAR_PHOTOS_COUNT)));
    });
  }
});

document.querySelector('#picture-cancel').addEventListener('click', () => {
  closeUserPhoto();
});

document.querySelector('#picture-cancel').addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeUserPhoto();
  }
});

export const renderPictures = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    fragment.appendChild(renderPicture(picture));
  });
  return fragment;
};

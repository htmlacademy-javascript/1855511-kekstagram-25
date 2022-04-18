import {renderPictures} from './miniatures.js';
import {getData} from './api.js';
import {closeUserModal} from './user-modal.js';
import {setUserFormSubmit} from './user-form.js';
import './value-element.js';
import './effects.js';
import './api.js';
import './message.js';
import './upload-photo.js';


getData().then((photos) => {
  document.querySelector('.pictures').appendChild(renderPictures(photos));
});

setUserFormSubmit(closeUserModal);

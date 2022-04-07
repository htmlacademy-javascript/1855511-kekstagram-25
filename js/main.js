import {generateData} from './data.js';
import {renderPictures} from './miniatures.js';
import './user-modal.js';

const DATA = generateData();
document.querySelector('.pictures').appendChild(renderPictures(DATA));

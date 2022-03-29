import {generateData} from './data.js';
import {renderPictures} from './miniatures.js';

const DATA = generateData();
document.querySelector('.pictures').appendChild(renderPictures(DATA));

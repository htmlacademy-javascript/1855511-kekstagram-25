import {getRandomArrayElement} from './until.js';
import {generateComment} from './generate-comment.js';
import {getRandomInt} from './until.js';

const PHOTOS_DESCRIPTIONS = [
  'Описание фотографии 1',
  'Описание фотографии 2',
  'Описание фотографии 3',
];

const generateData = () => Array.from(
  { length: 25 },
  (el, i) => ({
    id: i + 1,
    url: `photos/${i + 1}.jpg`,
    description: getRandomArrayElement(PHOTOS_DESCRIPTIONS),
    likes: getRandomInt(15, 200),
    comments: Array.from(
      { length: getRandomInt(1, 5) },
      (al, j) => generateComment(j + 1)
    )
  })
);

export {generateData};

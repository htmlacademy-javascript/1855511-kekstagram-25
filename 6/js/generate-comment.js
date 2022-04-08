import {getRandomInt} from './until.js';
import {getRandomArrayElement} from './until.js';

const NAMES = [
  'Иван',
  'Дмитрий',
  'Мария',
  'Андрей',
  'Виктор',
  'Юлия',
  'Виктория',
  'Максим',
  'Оксана',
  'Вероника',
  'Алексей',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const generateComment = (commentId) => ({
  id: commentId,
  avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

export {generateComment};

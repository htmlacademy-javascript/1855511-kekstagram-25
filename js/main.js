// Возвращает случайное целое число от 0 до 10
function getRandom(min, max) {
  if (min >= max) {
    return ('Неверное минимальное значение');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Проверка максимальной длины строки

function validateStringLength (string, maxLength) {
  return string.length <= maxLength;
}

validateStringLength('hello', 140);

//// Задание 4


// Количество лайков

function randomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

// Описание фотографии

const description = 'Описание фотографии';

// Комментарий

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

const AVATARS = [
  'img/avatar-1.svg',
  'img/avatar-2.svg',
  'img/avatar-3.svg',
  'img/avatar-4.svg',
  'img/avatar-5.svg',
  'img/avatar-6.svg',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const ID = [];
while (ID.length < 150) {
  const randomNumber = Math.ceil(Math.random() * 150);
  let found = false;
  for (let i=0; i < ID.length; i++) {
    if (ID[i] === randomNumber) {
      found = true;
      break;
    }
  }
  if (!found) { ID[ID.length]=randomNumber;}
}

const SIMILAR_DESCRIPTION_COUNT = 5;

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createDescription = () => {
  const randomIdIndex = getRandomPositiveInteger(0, ID.length - 1);
  const randomNameIndex = getRandomPositiveInteger(0, NAMES.length - 1);
  const randomAvatarIndex = getRandomPositiveInteger(0, AVATARS.length - 1);
  const randomMessageIndex = getRandomPositiveInteger(0, MESSAGES.length - 1);

  return {
    id: ID[randomIdIndex],
    name: NAMES[randomNameIndex],
    avatar: AVATARS[randomAvatarIndex],
    message: MESSAGES[randomMessageIndex],
  };
};

const similarDescription = Array.from({length: SIMILAR_DESCRIPTION_COUNT}, createDescription);

const comments = [similarDescription];

// Структура объекта

let Object = [];
let url = 1;
for (let idObject = 1; idObject < 26; idObject++) {
  while (url < 26) {
    const likes = randomInteger(15, 200);
    Object = [
      idObject,
      `photos/${url}.jpg`,
      likes,
      description,
      comments,
    ];
    url++;
    break;
  }
  console.log(Object);
}

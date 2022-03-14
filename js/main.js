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

const PHOTOS_DESCRIPTIONS = [
  'Описание фотографии 1',
  'Описание фотографии 2',
  'Описание фотографии 3',
];

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

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const getRandomInt = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (array) => {
  return array[getRandomInt(0, array.length - 1)]
}

const generateComment = (commentId) => {
  return {
    id: commentId,
    avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  }
}

const generateData = () => {
  return Array.from(
    { length: 25 },
    (el, i) => {
      return {
        id: i + 1,
        url: `photos/${i + 1}.jpg`,
        description: getRandomArrayElement(PHOTOS_DESCRIPTIONS),
        likes: getRandomInt(15, 200),
        comments: Array.from(
          { length: getRandomInt(1, 5) },
          (el, j) => {
            return generateComment(j + 1)
          }
        )
      }
    }
  )
}

const DATA = generateData();

console.log(DATA);
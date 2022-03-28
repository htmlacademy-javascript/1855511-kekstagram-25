// Возвращает случайное целое число от 0 до 10

function getRandom(min, max) {
  if (min >= max) {
    return ('Неверное минимальное значение');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export {getRandom};

// Возвращает случайное целое число от 0 до 10
function getRandom(min, max) {
  if (min >= max) {
    return ("Неверное минимальное значение");
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log (getRandom(0, 10));

// Проверка максимальной длины строки

let x = 'Hellower';
function string (x, y) {
  if (x > y) {
    return ('Превышено максимальное количество символов');
  }
  return ('Количество символов допустимое');
}
console.log (string(x.length, 20));

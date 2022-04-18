export const MessageError = () => {
  document.querySelector('.error').classList.remove('hidden');
  document.querySelector('.error__button').addEventListener('click', () => {
    document.querySelector('.error').classList.add('hidden');
  });
};

export const MessageOk = () => {
  document.querySelector('.success').classList.remove('hidden');
  document.querySelector('.success__button').addEventListener('click', () => {
    document.querySelector('.success').classList.add('hidden');
  });
};

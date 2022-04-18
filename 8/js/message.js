export const renderMessageOk = () => {
  const success = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
  document.body.appendChild(success);
  document.querySelector('.success__button').addEventListener('click', () => {
    document.querySelector('.success').classList.add('hidden');
  });
};

export const renderMessageError = () => {
  const error = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
  document.body.appendChild(error);
  document.querySelector('.error__button').addEventListener('click', () => {
    document.querySelector('.error').classList.add('hidden');
  });
};


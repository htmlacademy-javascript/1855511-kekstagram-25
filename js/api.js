let data = null;

const getData = window.getData = () => new Promise((resolve) => {
  if (data) {
    resolve(data);
  } else {
    fetch('https://25.javascript.pages.academy/kekstagram/data')
      .then((res) => res.json())
      .then((photos) => {
        data = photos;
        resolve(data);
      });
  }
});

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://25.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export {getData, sendData};

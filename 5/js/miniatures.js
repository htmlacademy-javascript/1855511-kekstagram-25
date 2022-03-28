const renderPicture = (picture) => {
  const node = document.querySelector('#picture').content.querySelector('.picture').cloneNode(true);
  node.querySelector('.picture__img').setAttribute('src', picture.url);
  node.querySelector('.picture__comments').textContent = picture.comments;
  node.querySelector('.picture__likes').textContent = picture.likes;
  return node;
};

export const renderPictures = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    fragment.appendChild(renderPicture(picture));
  });
  return fragment;
};

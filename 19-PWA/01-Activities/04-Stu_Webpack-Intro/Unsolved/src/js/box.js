// TODO: Add a comment explaining the role of `export` in this function `boxClick()`
// exports this js so it can be imported.

export const boxClick = () => {
  const box = document.getElementById('box');
  if (box.style.backgroundColor === 'blue') {
    box.style.backgroundColor = 'yellow';
  } else {
    box.style.backgroundColor = 'blue';
  }
};

export const hideLongString = (string, length) => {
  if (string.length > length) {
    return string.slice(0, length) + '...';
  } else {
    return string;
  }
};
export const numberWithCommas = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
export const enterToActive = (selectorInput, selectorBtn) => {
  document.querySelector(selectorInput).addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      document.querySelector(selectorBtn).click();
    }
  });
};

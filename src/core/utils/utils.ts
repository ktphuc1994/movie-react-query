export const hideLongString = (string: String, length: number) => {
  if (string.length > length) {
    return string.slice(0, length) + '...';
  } else {
    return string;
  }
};

export const numberWithCommas = (num: Number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const getStringPosition = (
  searchString: string[],
  paragraph: string,
) => {
  for (const searchTerm of searchString) {
    const indexOfFirst = paragraph.indexOf(searchTerm);
    if (indexOfFirst !== -1) return indexOfFirst + searchTerm.length;
  }
  return 0;
};

export const enterToActive = (
  selectorInput: keyof HTMLElementTagNameMap,
  selectorBtn: keyof HTMLElementTagNameMap,
) => {
  document.querySelector(selectorInput)!.addEventListener('keyup', (e) => {
    let keyboardEvent = e as KeyboardEvent;
    if (keyboardEvent.key === 'Enter') {
      document.querySelector(selectorBtn)!.click();
    }
  });
};

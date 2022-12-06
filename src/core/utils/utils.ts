import { notification } from 'antd';

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
export const enterToActive = (
  selectorInput: keyof HTMLElementTagNameMap,
  selectorBtn: keyof HTMLElementTagNameMap
) => {
  document.querySelector(selectorInput)!.addEventListener('keyup', (e) => {
    let keyboardEvent = <KeyboardEvent>e;
    if (keyboardEvent.key === 'Enter') {
      document.querySelector(selectorBtn)!.click();
    }
  });
};

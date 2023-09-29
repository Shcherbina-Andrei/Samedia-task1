export const moveByHorizontal = (element, position, reverse = false) => {
  element.style.setProperty('--x', `${reverse ? '' : '-'}${position * 5}px`);
}

export const moveByVertical = (element, reverse = false) => {
  element.style.setProperty('--y', `${reverse ? '-' : ''}10px`);
}

export const resetElementPosition = (element) => {
  element.style.setProperty('--y', '0');
}

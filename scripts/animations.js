import { moveByHorizontal, moveByVertical, resetElementPosition } from './helpers.js';

const greenLeaf = document.getElementById('green-leaf');
const darkLeaf = document.getElementById('dark-leaf');

const categoriesItems = document.querySelectorAll('.categories__item');

for (let i = 0; i < categoriesItems.length; i++) {
  categoriesItems[i].addEventListener('mouseover', () => {
    moveByHorizontal(greenLeaf, categoriesItems.length - i);
    moveByHorizontal(darkLeaf, categoriesItems.length - i, true);
    moveByVertical(greenLeaf);
    moveByVertical(darkLeaf);
  });

  categoriesItems[i].addEventListener('mouseout', () => {
    resetElementPosition(greenLeaf);
    resetElementPosition(darkLeaf);
  });
}

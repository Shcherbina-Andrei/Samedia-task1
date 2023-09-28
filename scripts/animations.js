import { animateByMouse } from './animate-by-mouse.js';

const greenLeaf = document.getElementById('green-leaf');
const darkLeaf = document.getElementById('dark-leaf');

let prevMouseLocation = {
  x: 0,
  y: 0,
};

document.addEventListener('mousemove', (evt) => {
  const currentMouseLocation = { x: evt.clientX, y: evt.clientY };

  animateByMouse(darkLeaf, currentMouseLocation, prevMouseLocation, {
    reverseX: true,
  });
  let { x, y } = animateByMouse(
    greenLeaf,
    currentMouseLocation,
    prevMouseLocation,
    { reverseY: true }
  );

  prevMouseLocation = { x, y };
});

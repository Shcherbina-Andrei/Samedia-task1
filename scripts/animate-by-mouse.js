import { DIRECTIONS, defineDirection } from './utils.js';

export const animateByMouse = (
  element,
  mouseCoordinates,
  prevCoordinates,
  { step = 0.2, reverseX = false, reverseY = false }
) => {
  const translateX = parseFloat(
    window.getComputedStyle(element).getPropertyValue('--x')
  );
  const translateY = parseFloat(
    window.getComputedStyle(element).getPropertyValue('--y')
  );

  const direction = defineDirection(mouseCoordinates, prevCoordinates);

  if (reverseX && direction.x !== DIRECTIONS.NoChanges) {
    direction.x =
      direction.x === DIRECTIONS.Right ? DIRECTIONS.Left : DIRECTIONS.Right;
  }

  if (reverseY && direction.y !== DIRECTIONS.NoChanges) {
    direction.y =
      direction.y === DIRECTIONS.Down ? DIRECTIONS.Top : DIRECTIONS.Down;
  }

  if (direction.x !== DIRECTIONS.NoChanges) {
    const newValueX =
      direction.x === DIRECTIONS.Right ? translateX + step : translateX - step;
    element.style.setProperty('--x', `${newValueX}px`);
  }

  if (direction.y !== DIRECTIONS.NoChanges) {
    const newValueY =
      direction.y === DIRECTIONS.Down ? translateY + step : translateY - step;
    element.style.setProperty('--y', `${newValueY}px`);
  }

  return { x: mouseCoordinates.x, y: mouseCoordinates.y };
};

export const DIRECTIONS = {
  Right: 'right',
  Left: 'left',
  Up: 'up',
  Down: 'down',
  NoChanges: 'no changes',
};

export const defineDirection = (currentCoordinates, prevCoordinates) => {
  const direction = { x: DIRECTIONS.NoChanges, y: DIRECTIONS.NoChanges };

  if (currentCoordinates.x - prevCoordinates.x !== 0) {
    direction.x =
      currentCoordinates.x - prevCoordinates.x > 0
        ? DIRECTIONS.Right
        : DIRECTIONS.Left;
  }

  if (currentCoordinates.y - prevCoordinates.y !== 0) {
    direction.y =
      currentCoordinates.y - prevCoordinates.y > 0
        ? DIRECTIONS.Down
        : DIRECTIONS.Up;
  }

  return direction;
};

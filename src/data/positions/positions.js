const getPosition = positionID => {
  const { position } = require(`src/data/positions/position/${positionID}`);
  return position;
};

export const positions = [
  getPosition('lfg-app-developer'),
  getPosition('university-highlands-maintenance-team'),
  getPosition('app-state-teaching-assistant')
];

const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const oi = species.find((ni) => ni.name === animal);
  if (oi.residents[0].age > age) {
    return true;
  } return false;
}

module.exports = getAnimalsOlderThan;

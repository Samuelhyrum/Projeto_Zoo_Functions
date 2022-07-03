const data = require('../data/zoo_data');

const { species } = data;

function getOldestFromFirstSpecies(id) {
  const result = data.employees.filter((colab) => colab.id === id)
    .map((animalOld) => animalOld.responsibleFor[0]);
  const array = species.filter((ani) => ani.id === result[0]);
  const map = array.map((anim) => anim.residents);
  const maxAge = map.reduce((a, b) => (a.age > b.age ? a : b));
  const sort = maxAge.sort((a, b) => b.age - a.age);

  return Object.values(sort[0]);
}
// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;

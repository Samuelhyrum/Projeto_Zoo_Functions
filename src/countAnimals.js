const data = require('../data/zoo_data');

const { species } = data;

function conut() {
  return species.reduce((acc, spe) => {
    const num = acc;
    num[spe.name] = spe.residents.length;
    return num;
  }, {});
}

function countAnimals(animal) {
  if (!animal) {
    return conut();
  }
  const res = species.find((specie) => specie.name === animal.specie).residents;
  if (!animal.sex) {
    return res.length;
  }
  return res.reduce((soma, residente) => {
    let s = soma;
    if (residente.sex === animal.sex) {
      s += 1;
    }
    return s;
  }, 0);
}

module.exports = countAnimals;

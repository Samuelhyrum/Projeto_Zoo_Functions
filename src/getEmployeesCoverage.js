const data = require('../data/zoo_data');

const { species, employees } = data;
function getEmployees() {
  return employees.map((cola) => ({
    id: cola.id,
    fullName: `${cola.firstName} ${cola.lastName}`,
    species: cola.responsibleFor.map((IdAnimal) => species.find((specie) =>
      specie.id === IdAnimal).name),
    locations: cola.responsibleFor.map((IdAnimal) => species.find((specie) =>
      specie.id === IdAnimal).location),
  }));
}

function getEmployeesCoverage(IdP) {
  if (IdP === undefined) {
    return getEmployees();
  } const result = employees.filter((colab) => colab.firstName === IdP.name
  || colab.lastName === IdP.name
  || colab.id === IdP.id).map((id) => id.id);
  if (result.length === 0) {
    throw new Error('Informações inválidas');
  } if (result.length !== 0) {
    return getEmployees().find((info) => info.id === result[0]);
  }
}

module.exports = getEmployeesCoverage;

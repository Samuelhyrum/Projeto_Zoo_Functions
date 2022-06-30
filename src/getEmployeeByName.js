const data = require('../data/zoo_data');

// const { species, employees } = data;

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const getName = data.employees.find((procurar) =>
    procurar.firstName === employeeName || procurar.lastName === employeeName);
  return getName;
}
// console.log(getEmployeeByName('Burl'));
module.exports = getEmployeeByName;

const data = require('../data/zoo_data');

function isManager(id) {
  const verify = data.employees.some((get) => get.managers[0] === id || get.managers[1] === id);
  return verify;
}
// console.log(isManager('b0dc644a-5335-489b-8a2c-4e086c7819a2'));
function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return data.employees.filter((get) =>
      get.managers[0] === managerId).map((get) => `${get.firstName} ${get.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };

const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants.reduce((acc, valor) => {
    const t = acc;
    if (valor.age >= 18 && valor.age < 50) {
      acc.adult += 1;
    } if (valor.age >= 50) {
      acc.senior += 1;
    } if (valor.age < 18) {
      acc.child += 1;
    }
    return t;
  }, { child: 0, adult: 0, senior: 0 });
}
function calculateEntry(entrants) {
  if (entrants === undefined) {
    return 0;
  }
  if (Object.keys(entrants).length === 0) {
    return 0;
  } const s = countEntrants(entrants);
  return s.adult * data.prices.adult + s.child * data.prices.child + s.senior * data.prices.senior;
}

module.exports = { calculateEntry, countEntrants };

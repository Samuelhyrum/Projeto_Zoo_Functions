const data = require('../data/zoo_data');

const { species } = data;

const getSpeciesByIds = (...ids) => {
  if (ids === undefined) return [];
  return species.filter((id) => ids.includes(id.id));
};

module.exports = getSpeciesByIds;

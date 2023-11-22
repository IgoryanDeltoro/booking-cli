const { City } = require('../../models');

const getCitiesList = async (req, res) => {
  const result = await City.find({});
  const cities = result[0].cities;

  res.json(cities);
};

module.exports = getCitiesList;

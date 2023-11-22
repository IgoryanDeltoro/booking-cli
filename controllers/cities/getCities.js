const { City } = require('../../models');

const getCitiesList = async (req, res) => {
  const result = await City.find({});

  res.json({
    cities: result[0].cities,
  });
};

module.exports = getCitiesList;

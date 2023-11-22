const { City } = require('../../models');

const getCitiesList = async (req, res) => {
  const result = await City.find({});
  
  res.json({
    status: 'success',
    code: 200,
    data: { cities: result[0].cities },
  });
};

module.exports = getCitiesList;

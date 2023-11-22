const { Apartment } = require('../../models');

const getApartments = async (req, res) => {
  console.log('get apartments');
  const result = await Apartment.find({}, '-createdAt -updatedAt').sort({
    name: 1,
  });
  res.json({
    status: 'success',
    code: 200,
    data: { Apartments: result },
  });
};

module.exports = getApartments;

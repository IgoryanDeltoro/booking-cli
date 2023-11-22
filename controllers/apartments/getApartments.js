const { Apartment } = require('../../models');

const getApartments = async (req, res) => {
  const result = await Apartment.find({}, '-createdAt -updatedAt').sort({
    name: 1,
  });

  res.json({ result });
};

module.exports = getApartments;

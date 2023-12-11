const { Apartment } = require('../../models');

const getApartments = async (req, res) => {
  const { page = 1, limit = 4 } = req.query;
  const skip = (page - 1) * limit;

  const apartments = await Apartment.find({}, '-createdAt -updatedAt', {
    skip,
    limit,
  }).sort({
    price: 1,
  });

  const result = apartments.map(({ _id, _doc }) => {
    const { _id: id, ...other } = _doc;
    return { id: _id.toString(), ...other };
  });

  const allApartments = await Apartment.find({});

  res.json({ apartments: result, apartmentsCount: allApartments.length });
};

module.exports = getApartments;

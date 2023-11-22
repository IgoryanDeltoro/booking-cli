const { Apartment } = require('../../models');

const getApartments = async (req, res) => {
  const apartments = await Apartment.find({}, '-createdAt -updatedAt').sort({
    price: 1,
  });

  const result = apartments.map(({ _id, _doc }) => {
    const { _id: id, ...other } = _doc;
    return { id: _id.toString(), ...other };
  });

  res.json(result);
};

module.exports = getApartments;

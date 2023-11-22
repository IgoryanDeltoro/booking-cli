const { Apartment } = require('../../models');

const { HttpError } = require('../../helpers');

const getApartmentsById = async (req, res) => {
  const { id } = req.params;

  const result = await Apartment.findById(id, '-createdAt -updatedAt');

  if (!result) {
    throw HttpError(404, `Apartment with ${id} not found`);
  }

  res.json({ result });
};

module.exports = getApartmentsById;

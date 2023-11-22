const { Apartment } = require('../../models');

const { HttpError } = require('../../helpers');

const getApartmentsById = async (req, res) => {
  const { id } = req.params;

  const result = await Apartment.findById(id, '-createdAt -updatedAt');

  if (result) {
    res.json({
      status: 'success',
      code: 200,
      data: {
        apartment: result,
      },
    });
  } else {
    throw HttpError(404, `Apartment with ${id} not found`);
  }
};

module.exports = getApartmentsById;

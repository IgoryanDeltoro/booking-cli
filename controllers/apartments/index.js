const { ctrlWrapper } = require('../../decorators');

const getApartmentsById = require('./getApartmentById');
const getApartments = require('./getApartments');

module.exports = {
  getApartmentsById: ctrlWrapper(getApartmentsById),
  getApartments: ctrlWrapper(getApartments),
};

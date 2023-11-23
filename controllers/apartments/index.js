const { ctrlWrapper } = require('../../decorators');

const getApartmentById = require('./getApartmentById');
const getApartments = require('./getApartments');
const createReview = require('./createReview');

module.exports = {
  getApartmentById: ctrlWrapper(getApartmentById),
  getApartments: ctrlWrapper(getApartments),
  createReview: ctrlWrapper(createReview),
};

const { isValidObjectId } = require('mongoose');

const { HttpError } = require('../helpers');

const isValid = (req, res, next) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    next(HttpError(404, `${id} is not valid`));
  }
  next();
};

module.exports = isValid;

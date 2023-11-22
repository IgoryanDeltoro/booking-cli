const { HttpError } = require('../helpers');

const validateFormNameBody = (req, res, next) => {
  const { name: userName, avatarURL: avatar } = req.user;
  if (req.body?.name && /^[A-Za-z][-A-Za-z0-9_:.]*$/.test(req.body.name)) {
    next(HttpError(400, 'The name field must be a string'));
  }
  const name = req.body?.name ? JSON.parse(req.body.name) : userName;
  const avatarURL = req.file?.path ? req.file.path : avatar;

  req.file = { name, avatarURL };
  next();
};

module.exports = validateFormNameBody;

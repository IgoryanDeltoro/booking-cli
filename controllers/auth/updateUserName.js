const { User } = require('../../models');

const { HttpError } = require('../../helpers');

const updateUserName = async (req, res) => {
  const { _id: owner } = req.user;

  const userName = await User.findByIdAndUpdate({ _id: owner }, req.body, {
    new: true,
  });

  if (!userName) {
    throw HttpError(404);
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      user: { name: userName.name },
    },
  });
};

module.exports = updateUserName;

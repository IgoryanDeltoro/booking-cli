const { User } = require('../../models');

const uploadAvatar = async (req, res) => {
  const { _id } = req.user;
  const { avatarURL, name } = req.file;

  const result = await User.findByIdAndUpdate(
    _id,
    { avatarURL, name },
    {
      new: true,
    }
  );
  res.json({
    status: 'success',
    code: 200,
    data: {
      user: { avatarURL: result.avatarURL, name: result.name },
    },
  });
  res.json();
};

module.exports = uploadAvatar;

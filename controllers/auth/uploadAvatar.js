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
    user: { avatarURL: result.avatarURL, name: result.name },
  });
  res.json();
};

module.exports = uploadAvatar;

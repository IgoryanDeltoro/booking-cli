const getCurrent = async (req, res) => {
  const { name, email, _id: userId, avatarURL } = req.user;

  res.json({
    user: {
      userId,
      name,
      email,
      avatarURL,
    },
  });
};

module.exports = getCurrent;

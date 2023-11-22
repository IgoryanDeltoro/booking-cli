const getCurrent = async (req, res) => {
  const { name, email, _id: userId, avatarURL } = req.user;

  res.json({
    status: 'success',
    code: 200,
    data: {
      user: {
        userId,
        name,
        email,
        avatarURL,
      },
    },
  });
};

module.exports = getCurrent;

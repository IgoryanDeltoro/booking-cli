const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { User } = require('../../models');

const { HttpError } = require('../../helpers');

const { JWT_SECRET } = process.env;

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(401, 'Email or password is wrong');
  }

  const passwordCompare = await bcrypt.compare(password, user.password);

  if (!passwordCompare) {
    throw HttpError(401, 'Email or password is wrong');
  }

  const { _id: id, avatarURL } = user;

  const payload = {
    id,
  };

  const token = jwt.sign(payload, JWT_SECRET);
  await User.findByIdAndUpdate(id, { token });

  res.json({
    status: 'success',
    code: 200,
    data: {
      token,
      user: {
        userId: id,
        name: user.name,
        email: user.email,
        avatarURL,
      },
    },
  });
};

module.exports = userLogin;

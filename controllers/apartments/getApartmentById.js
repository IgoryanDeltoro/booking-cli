const { Apartment, Review, User } = require('../../models');
const { HttpError } = require('../../helpers');
const { default: mongoose } = require('mongoose');

const getApartmentById = async (req, res) => {
  const { id } = req.params;

  let result = [];

  const apartment = await Apartment.findById(id, '-createdAt -updatedAt');
  const feedbacks = await Review.findById({ _id: id });

  if (!apartment) {
    throw HttpError(404, `Apartment with ${id} not found`);
  }

  if (feedbacks) {
    const { reviews } = feedbacks;

    const userId = reviews.map(
      ({ userId }) => new mongoose.Types.ObjectId(userId)
    );

    const users = await User.find({ _id: { $in: userId } });

    result = reviews.map(review => {
      const user = users.find(el => el._id.toString() === review.userId);

      return {
        id: review.id,
        author: user.name,
        email: user.email,
        avatar: user.avatarURL,
        comment: review.comment,
      };
    });
  }

  res.json({ ...apartment._doc, reviews: result });
};

module.exports = getApartmentById;

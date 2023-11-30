const { getDate } = require('../../helpers');
const { Review, Apartment } = require('../../models');

const createReview = async (req, res) => {
  const { _id } = req.user;
  const { id } = req.params;
  const { comment, rating } = req.body;

  const result = await Review.find({ _id: id });

  let data = [];
  const date = getDate('short');

  if (result.length === 0) {
    data = await Review.create({
      _id: id,
      reviews: {
        userId: _id,
        comment,
        rating,
        date,
      },
    });
  } else {
    data = await Review.findByIdAndUpdate(
      { _id: id },
      {
        $push: {
          reviews: {
            userId: _id,
            comment,
            rating,
            date,
          },
        },
      },
      { new: true }
    );
  }

  const sum = data.reviews.reduce((acc, el) => acc + el.rating, 0);
  const averageRating = sum / data.reviews.length;

  await Apartment.findByIdAndUpdate(
    { _id: id },
    { rating: averageRating.toFixed(1) }
  );

  res.status(201).json(data);
};

module.exports = createReview;

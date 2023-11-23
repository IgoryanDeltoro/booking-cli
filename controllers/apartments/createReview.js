const { Review } = require('../../models');

const createReview = async (req, res) => {
  const { _id } = req.user;
  const { id } = req.params;
  const { comment } = req.body;

  const result = await Review.find({ _id: id });

  let data = [];

  if (result.length === 0) {
    data = await Review.create(
      {
        _id: id,
        reviews: {
          userId: _id,
          comment,
        },
      },
      { new: true }
    );
  } else {
    data = await Review.findByIdAndUpdate(
      { _id: id },
      {
        $push: {
          reviews: {
            userId: _id,
            comment,
          },
        },
      },
      { new: true }
    );
  }

  res.status(201).json(data);
};

module.exports = createReview;

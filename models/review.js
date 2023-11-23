const { Schema, model } = require('mongoose');

const { handleMongooseError } = require('../helpers');

const reviewSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    reviews: {
      type: [
        {
          userId: {
            type: String,
            default: '',
          },
          comment: {
            type: String,
            default: '',
          },
        },
      ],
      default: [],
    },
  },
  { versionKey: false, timestamps: true }
);

reviewSchema.post('save', handleMongooseError);

const Review = model('review', reviewSchema);

module.exports = Review;

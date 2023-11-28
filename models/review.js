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
          rating: {
            type: Number,
            default: 0,
          },
          date: {
            type: String,
            default: '',
          },
        },
      ],
      default: [],
    },
  },
  { versionKey: false, timestamps: false }
);

reviewSchema.post('save', handleMongooseError);

const Review = model('review', reviewSchema);

module.exports = Review;

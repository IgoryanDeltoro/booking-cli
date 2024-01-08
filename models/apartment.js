const { Schema, model } = require('mongoose');

const { handleMongooseError } = require('../helpers');

const apartmentSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    descr: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    location: {
      city: {
        type: String,
        required: true,
      },
    },
    owner: {
      name: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
    },
  },
  { versionKey: false, timestamps: false }
);

apartmentSchema.post('save', handleMongooseError);

const Apartment = model('apartment', apartmentSchema);

module.exports = Apartment;

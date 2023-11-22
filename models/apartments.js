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
      type: String,
      required: true,
    },
    price: {
      type: String,
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
    ordered: {
      isOrdered: {
        type: Boolean,
        default: false,
      },
      customer: {
        type: String,
        default: '',
      },
    },
  },
  { versionKey: false, timestamps: true }
);

apartmentSchema.post('save', handleMongooseError);

const Apartment = model('apartment', apartmentSchema);

module.exports = Apartment;

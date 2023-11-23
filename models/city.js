const { model, Schema } = require('mongoose');

const { handleMongooseError } = require('../helpers');

const citiesSchema = new Schema(
  {
    cities: [
      {
        type: String,
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

citiesSchema.post('save', handleMongooseError);

const City = model('city', citiesSchema);

module.exports = City;

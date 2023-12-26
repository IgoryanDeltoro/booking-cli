const { Schema, model } = require('mongoose');

const { handleMongooseError } = require('../helpers');

const orderSchema = new Schema(
  {
    apartment: {
      type: String,
      required: true,
    },
    customer: {
      type: Schema.ObjectId,
      required: true,
    },

    date: {
      from: {
        type: String,
        required: true,
      },
      to: {
        type: String,
        required: true,
      },
    },
  },
  { versionKey: false, timestamps: false }
);

orderSchema.post('save', handleMongooseError);

const Order = model('Order', orderSchema);

module.exports = Order;

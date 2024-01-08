const { Order } = require('../../models');
const { HttpError } = require('../../helpers');

const createOrder = async (req, res) => {
  const { _id } = req.user;
  const { apartment, date } = req.body;

  const fondDate = await Order.find({
    $or: [
      {
        $and: [
          { 'date.from': { $lte: date.from } },
          { 'date.to': { $gte: date.to } },
        ],
      },
      {
        $and: [
          { 'date.from': { $lte: date.from } },
          { 'date.to': { $gte: date.to } },
        ],
      },
      {
        $and: [
          { 'date.from': { $gte: date.from } },
          { 'date.to': { $lte: date.to } },
        ],
      },
    ],
    apartment: apartment,
  });

  if (fondDate.length !== 0) {
    throw HttpError(
      409,
      `The apartment has been already booked from the ${date.from}th to the ${date.from}th`
    );
  }

  const result = await Order.create({ ...req.body, customer: _id });

  res.status(201).json(result);
};

module.exports = createOrder;

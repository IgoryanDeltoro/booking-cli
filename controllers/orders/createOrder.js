const { User, Apartment, Order } = require('../../models');
const { HttpError } = require('../../helpers');

const createOrder = async (req, res) => {
  const { _id } = req.user;

  // const orders = await User.findById(_id, 'ordersList');
  // const result = orders.ordersList.filter(el => el.apartmentId === apartmentId);

  // if (result.length !== 0) {
  //   throw HttpError(409, 'The apartment has been already booked');
  // }

  // const { ordersList } = await User.findByIdAndUpdate(
  //   _id,
  //   { $push: { ordersList: req.body } },
  //   { new: true }
  // );

  // const ordered = {
  //   isOrdered: true,
  //   customer: _id,
  // };

  const result = await Order.create({ ...req.body, customer: _id });

  // await Apartment.findOneAndUpdate({ _id: apartmentId }, { ordered });

  res.status(201).json(result);
};

module.exports = createOrder;

const { User, Apartment } = require('../../models');
const { HttpError } = require('../../helpers');

const createOrder = async (req, res) => {
  const { _id } = req.user;
  const { apartmentId } = req.body;

  const orders = await User.findById(_id, 'ordersList');
  const result = orders.ordersList.filter(el => el.apartmentId === apartmentId);

  if (result.length !== 0) {
    throw HttpError(409, 'The apartment has been already booked');
  }

  const { ordersList } = await User.findByIdAndUpdate(
    _id,
    { $push: { ordersList: req.body } },
    { new: true }
  );

  const ordered = {
    isOrdered: true,
    customer: _id,
  };

  await Apartment.findOneAndUpdate({ _id: apartmentId }, { ordered });

  res.status(201).json({
    status: 'success',
    code: 201,
    data: { order: ordersList },
  });
};

module.exports = createOrder;

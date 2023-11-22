const { User, Apartment } = require('../../models');

const getOrders = async (req, res) => {
  const { _id } = req.user;
  const { ordersList } = await User.findById(_id, 'ordersList');

  const apartmentId = ordersList.map(({ apartmentId }) => apartmentId);

  const result = await Apartment.find({
    _id: {
      $in: apartmentId,
    },
  });

  res.json(result);
};

module.exports = getOrders;

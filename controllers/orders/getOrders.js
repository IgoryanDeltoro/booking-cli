const { User } = require('../../models');

const getOrders = async (req, res) => {
  const { _id } = req.user;
  const { ordersList } = await User.findById(_id, 'ordersList');

  res.json(ordersList);
};

module.exports = getOrders;

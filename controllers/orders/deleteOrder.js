const { Order } = require('../../models');

const deleteOrder = async (req, res) => {
  const { id: apartment } = req.params;

  const result = await Order.findOneAndDelete({ apartment });
  
  res.status(204).json(result);
};

module.exports = deleteOrder;

const { ctrlWrapper } = require('../../decorators');
const createOrder = require('./createOrder');
const deleteOrder = require('./deleteOrder');
const getOrders = require('./getOrders');

module.exports = {
  createOrder: ctrlWrapper(createOrder),
  deleteOrder: ctrlWrapper(deleteOrder),
  getOrders: ctrlWrapper(getOrders),
};

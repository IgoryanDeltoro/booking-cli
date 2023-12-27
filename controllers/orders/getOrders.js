const { Apartment, Order } = require('../../models');

const getOrders = async (req, res) => {
  const { _id } = req.user;

  const allOrders = await Order.find({ customer: _id });

  const orderedApartment = await Apartment.find({
    _id: {
      $in: allOrders.map(({ apartment }) => apartment),
    },
  });

  const result = orderedApartment.map(({ _id, _doc }) => {
    const ID = _id.toString();
    const date = allOrders
      // eslint-disable-next-line array-callback-return
      .map(el => {
        if (el.apartment === ID) return el.date;
      })
      .join('');

    const { _id: id, ...other } = _doc;

    return { date, id: ID, apartment: { id: ID, ...other } };
  });

  res.json(result);
};

module.exports = getOrders;

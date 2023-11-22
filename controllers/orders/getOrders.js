const { User, Apartment } = require('../../models');

const getOrders = async (req, res) => {
  const { _id } = req.user;
  const { ordersList } = await User.findById(_id, 'ordersList');

  const apartmentId = ordersList.map(({ apartmentId }) => apartmentId);

  const orderedApartment = await Apartment.find({
    _id: {
      $in: apartmentId,
    },
  });

  const result = orderedApartment.map(({ _id, _doc }) => {
    const { _id: id, ...other } = _doc;
    return { id: _id.toString(), ...other };
  });

  res.json(result);
};

module.exports = getOrders;

const { User, Apartment } = require('../../models');

const deleteOrder = async (req, res) => {
  const { _id } = req.user;
  const { id: apartmentId } = req.params;

  const { ordersList } = await User.findByIdAndUpdate(_id, {
    $pull: { ordersList: { apartmentId } },
  });

  await Apartment.findByIdAndUpdate(
    { _id: apartmentId },
    { ordered: { isOrdered: false, customer: '' } }
  );

  res.status(204).json(ordersList);
};

module.exports = deleteOrder;

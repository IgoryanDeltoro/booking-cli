const { User, Apartment } = require('../../models');

const deleteOrder = async (req, res) => {
  const { _id } = req.user;
  const { id: apartmentId } = req.params;

  const { ordersList } = await User.findByIdAndUpdate(_id, {
    $pull: { ordersList: { apartmentId } },
  });

  await Apartment.findByIdAndUpdate({ _id: apartmentId }, { ordered: null });

  res.json({
    status: 'success',
    code: 204,
    data: { ordersList },
  });
};

module.exports = deleteOrder;

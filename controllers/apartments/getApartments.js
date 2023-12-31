const { Apartment, Order } = require('../../models');

const getApartments = async (req, res) => {
  const { page = 1, limit = 4 } = req.query;
  const skip = (page - 1) * limit;

  let paramsSearch = {};

  const orderedApartment = await Order.find(
    {
      $or: [
        {
          $and: [
            { 'date.from': { $lte: req.query.from } },
            { 'date.to': { $gte: req.query.to } },
          ],
        },
        {
          $and: [
            { 'date.from': { $lte: req.query.from } },
            { 'date.to': { $gte: req.query.to } },
          ],
        },
        {
          $and: [
            { 'date.from': { $gte: req.query.from } },
            { 'date.to': { $lte: req.query.to } },
          ],
        },
      ],
    },
    'apartment'
  );

  if (req.query.city) {
    const city = req.query.city;
    const capitalize = city.charAt(0).toUpperCase() + city.slice(1);
    paramsSearch = { ...paramsSearch, location: { city: capitalize } };
  }
  if (req.query.price) {
    paramsSearch = { ...paramsSearch, price: { $gte: req.query.price } };
  }
  if (req.query.rating) {
    paramsSearch = { ...paramsSearch, rating: { $gte: req.query.rating } };
  }
  if (req.query.from) {
    paramsSearch = {
      ...paramsSearch,
      _id: { $nin: orderedApartment.map(({ apartment }) => apartment) },
    };
  }
  
  const apartments = await Apartment.find(
    paramsSearch,
    '-createdAt -updatedAt',
    {
      skip,
      limit,
    }
  ).sort({
    price: 1,
  });

  const result = apartments.map(({ _id, _doc }) => {
    const { _id: id, ...other } = _doc;
    return { id: _id.toString(), ...other };
  });

  const allApartments = await Apartment.find(paramsSearch);

  res.json({ apartments: result, apartmentsCount: allApartments.length });
};

module.exports = getApartments;

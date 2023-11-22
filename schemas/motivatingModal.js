const Joi = require('joi');

const motivatingModalSchema = Joi.object({
  newUser: Joi.boolean(),
  daysInApp: Joi.boolean(),
  addedRecipes: Joi.boolean(),
  favoriteRecipes: Joi.boolean(),
});

module.exports = motivatingModalSchema;

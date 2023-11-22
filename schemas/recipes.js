const Joi = require('joi');

const addRecipeSchema = Joi.object({
  title: Joi.string().required().messages({
    'string.base': 'The title must be a string',
    'any.required': 'The title field is required',
    'string.empty': 'The title field must not be empty',
  }),
  description: Joi.string().required().messages({
    'string.base': 'The description must be a string',
    'any.required': 'The description field is required',
    'string.empty': 'The description field must not be empty',
  }),
  category: Joi.string().required().messages({
    'string.base': 'The category must be a string',
    'any.required': 'The category field is required',
    'string.empty': 'The category field must not be empty',
  }),
  time: Joi.string().required().messages({
    'string.base': 'The time must be a string',
    'any.required': 'The time field is required',
    'string.empty': 'The time field must not be empty',
  }),
  ingredients: Joi.array()
    .items(
      Joi.object({
        id: Joi.string().required(),
        measure: Joi.string().required(),
      })
    )
    .required().messages({
      'array.base': 'The ingredients must be an array',
      'any.required': 'The ingredients field is required',
      'array.empty': 'The ingredients field must not be empty',
    }),
  instructions: Joi.array().items(Joi.string()).required().messages({
    'string.base': 'The instructions must be a string',
    'any.required': 'The instructions field is required',
    'string.empty': 'The instructions field must not be empty',
  }),
});

module.exports = addRecipeSchema;

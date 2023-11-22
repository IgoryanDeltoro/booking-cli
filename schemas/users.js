const Joi = require('joi');

const authSchema = Joi.object({
  name: Joi.string().messages({
    'string.base': 'The name must be a string',
    'any.required': 'The name field is required',
    'string.empty': 'The name field must not be empty',
  }),
  email: Joi.string().required().messages({
    'string.base': 'The email must be a string',
    'any.required': 'The email field is required',
    'string.empty': 'The email field must not be empty',
  }),
  password: Joi.string().min(6).required().messages({
    'string.base': 'The password must be a string',
    'any.required': 'The password field is required',
    'string.empty': 'The password field must not be empty',
  }),
});

module.exports = authSchema;

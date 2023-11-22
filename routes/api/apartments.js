const express = require('express');
const recipes = require('../../controllers/apartments');
const { authenticate } = require('../../middlewares');
// const { validateFormDataBody } = require('../../decorators');
// const { addRecipeSchema } = require('../../schemas');

const router = express.Router();

router.use(authenticate);

router.get('/', recipes.getApartments);
router.get('/:id', recipes.getApartmentsById);
router.post('/:id/reviews');

module.exports = router;

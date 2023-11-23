const express = require('express');
const apartments = require('../../controllers/apartments');
const { authenticate } = require('../../middlewares');
// const { validateFormDataBody } = require('../../decorators');
// const { addRecipeSchema } = require('../../schemas');

const router = express.Router();

router.use(authenticate);

router.get('/', apartments.getApartments);
router.get('/:id', apartments.getApartmentById);
router.post('/:id/reviews', apartments.createReview);

module.exports = router;

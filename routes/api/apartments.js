const express = require('express');
const apartments = require('../../controllers/apartments');
const { authenticate } = require('../../middlewares');
const isValid = require('../../middlewares/isValidId');

const router = express.Router();

router.get('/', apartments.getApartments);
router.get('/:id', authenticate, isValid, apartments.getApartmentById);
router.post('/:id/reviews', authenticate, isValid, apartments.createReview);

module.exports = router;

const express = require('express');
const apartments = require('../../controllers/apartments');
const { authenticate } = require('../../middlewares');
const isValid = require('../../middlewares/isValidId');


const router = express.Router();

router.use(authenticate);

router.get('/', apartments.getApartments);
router.get('/:id', isValid, apartments.getApartmentById);
router.post('/:id/reviews',isValid, apartments.createReview);

module.exports = router;

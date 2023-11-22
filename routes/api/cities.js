const express = require('express');
const cities = require('../../controllers/cities');
const { authenticate } = require('../../middlewares');

const router = express.Router();
router.use(authenticate);

router.get('/', cities.getCities);

module.exports = router;

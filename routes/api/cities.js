const express = require('express');
const cities = require('../../controllers/cities');
const router = express.Router();

router.get('/', cities.getCities);

module.exports = router;

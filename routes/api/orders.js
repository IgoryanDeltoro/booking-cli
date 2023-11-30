const express = require('express');
const orders = require('../../controllers/orders');
const { authenticate } = require('../../middlewares');
const isValid = require('../../middlewares/isValidId');

const router = express.Router();
router.use(authenticate);

router.get('/', orders.getOrders);
router.post('/', orders.createOrder);
router.delete('/:id', isValid, orders.deleteOrder);

module.exports = router;

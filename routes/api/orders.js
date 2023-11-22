const express = require('express');
const orders = require('../../controllers/orders');
const { authenticate } = require('../../middlewares');

const router = express.Router();
router.use(authenticate);

router.get('/', orders.getOrders);
router.post('/', orders.createOrder);
router.delete('/:id', orders.deleteOrder);

module.exports = router;

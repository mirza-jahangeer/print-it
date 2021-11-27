'use-strict'
const express = require('express');
const {addOrder, 
    getAllOrders, 
    getOrder,
    updateOrder,
    deleteOrder
      } = require('../controllers/orderController');

const router = express.Router();

router.post('/', addOrder);
router.get('/', getAllOrders);

router.get('/:id', getOrder);
router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder);

module.exports = {
    routes: router
}
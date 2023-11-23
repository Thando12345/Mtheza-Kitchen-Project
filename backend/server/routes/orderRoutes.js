// server/routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController'); // Correct case

// Define routes here
// Example route:
router.get('/', orderController.getOrders);

module.exports = router;

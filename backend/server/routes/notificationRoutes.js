// server/routes/notificationRoutes.js
const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController'); // Correct case

// Define routes here
// Example route:
router.get('/', notificationController.getNotifications);

module.exports = router;

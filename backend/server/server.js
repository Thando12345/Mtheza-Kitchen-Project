// server/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const orderRoutes = require('./routes/orderRoutes');
const notificationRoutes = require('./routes/notificationRoutes');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/orders', orderRoutes);
app.use('/api/notifications', notificationRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// backend/routes/profileRoutes.js
const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
  res.send('Profile Routes');
});

module.exports = router;

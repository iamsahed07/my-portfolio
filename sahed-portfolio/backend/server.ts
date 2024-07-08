// backend/server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
const profileRoutes = require('../routes/profileRoutes');
app.use('/profiles', profileRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();

// Initialize express
const app = express();

// Connect to database
connectDB();

// Middleware
const corsOptions = {
    origin: 'https://client-pink-chi.vercel.app', // Add your frontend URL here
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
  };
  app.use(cors(corsOptions));
  app.use(express.json({ extended: false }));

// Define routes
app.use('/api/auth', require('./routes/auth'));

// Port
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const express = require('express');
const todoRoutes = require('./routes/todoRoutes');
const usersRoutes = require('./routes/usersRoutes');
const authMiddleware = require('./middleware/authMiddleware');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(express.json());
app.use('/todos', todoRoutes);
app.use('/users', authMiddleware, usersRoutes);
app.use('/auth', authRoutes);

app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error'
  });
});

module.exports = app;
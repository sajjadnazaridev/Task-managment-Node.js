const express = require('express');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todoRoutes');
const usersRoutes = require('./routes/usersRoutes');
const authMiddleware = require('./middleware/authMiddleware');
const authRoutes = require('./routes/authRoutes');

const app = express();
const port = 8001;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/todosDB')
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/todos', todoRoutes);
app.use('/users', authMiddleware, usersRoutes);
app.use('/auth', authRoutes);

app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error'
  });
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
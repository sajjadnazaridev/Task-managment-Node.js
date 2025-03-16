const mongoose = require('mongoose');
const app = require('./app');
const port = 8001;

mongoose.connect('mongodb://localhost:27017/todosDB')
  .then(() => {
    console.log('Connected to MongoDB!');
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch(err => console.error('MongoDB connection error:', err));
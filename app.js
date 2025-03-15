const express = require('express');
const app = express();
const port = 8000;

app.use(express.json());

let todos = [];

// get all todos
app.get('/todos', (req, res) => {
    res.json(todos);
});
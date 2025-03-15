const express = require('express');
const path = require('path');
const router = express.Router();


const todos = require('../todos');

router.get('/todo', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "AddTodoPage.html"));
});

router.post('/todo', (req, res) => {
    const newTodo = { id: todos.length + 1, title: req.body.title };
    todos.push(newTodo);
    res.status(201).redirect('/todos');
});

module.exports = router;
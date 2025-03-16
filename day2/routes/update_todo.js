const express = require('express');
const path = require('path');

const todos = require('../todos');

const router = express.Router();

router.get('/todo', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "UpdateTodoPage.html"));
});

router.post('/todo/:id', (req, res) => {
    const index = todos.findIndex(todo => todo.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send(`<h1>Todo with id ${req.params.id} not found</h1>`);

    todos[index].title = req.body.title;
    res.redirect('/todos');
});

module.exports = router;
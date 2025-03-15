const express = require('express');
const app = express();
const port = 8000;

app.use(express.json());

let todos = [{ id: 1, title: 'Learn Node.js' }, { id: 2, title: 'Learn Express.js' }];

// get all todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

// get a single todo by id
app.get('/todo/:id', (req, res) => {
    const todo = todos.find(todo => todo.id === parseInt(req.params.id));
    if (!todo) return res.status(404).send(`<h1>Todo with id ${req.params.id} not found</h1>`);
    res.json(todo);
});

// create a new todo
app.post('/todo', (req, res) => {
    const newTodo = { id: todos.length + 1, title: req.body.title };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

//put a todo
app.put('/todo/:id', (req, res) => {
    const index = todos.findIndex(todo => todo.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send(`<h1>Todo with id ${req.params.id} not found</h1>`);
    index.body = req.body.title;
    res.json(todo);
});

//delete a todo
app.delete('/todo/:id', (req, res) => {
    const index = todos.findIndex(todo => todo.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send(`<h1>Todo with id ${req.params.id} not found</h1>`);
    todos.splice(index, 1);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
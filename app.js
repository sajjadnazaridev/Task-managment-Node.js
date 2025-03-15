const express = require('express');
const app = express();
const port = 8000;

// import custom modules
const todos = require('./todos');
const addTodo = require('./routes/add_todo');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
app.use(addTodo);
app.use('/add', addTodo);

//put a todo
app.put('/todo/:id', (req, res) => {
    const index = todos.findIndex(todo => todo.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send(`<h1>Todo with id ${req.params.id} not found</h1>`);
    index.body = req.body.title;
    res.json(index);
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
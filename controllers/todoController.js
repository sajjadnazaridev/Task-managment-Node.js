const todoServices = require('../services/todoService');

// Get all todos
exports.getAllTodos = async (req, res) => {
    try {
        const todos = await todoServices.getAllTodos();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single todo by id
exports.getTodoById = async (req, res) => {
    try {
        const todo = await todoServices.getTodoById(req.params.id);
        if (!todo) return res.status(404).json({ message: 'Todo not found' });
        res.json(todo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Create a new todo
exports.createTodo = async (req, res) => {
    const todo = {
        title: req.body.title,
        completed: req.body.completed || false
    };

    try {
        const savedTodo = await todoServices.createTodo(todo);
        res.status(201).json(savedTodo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a todo
exports.updateTodo = async (req, res) => {
    try {
        const todo = await todoServices.updateTodo(req.params.id);
        if (!todo) return res.status(404).json({ message: 'Todo not found' });

        if (req.body.title !== undefined) todo.title = req.body.title;
        if (req.body.completed !== undefined) todo.completed = req.body.completed;

        const updatedTodo = await todo.save();
        res.json(updatedTodo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Delete a todo
exports.deleteTodo = async (req, res) => {
    try {
        const todo = await todoServices.deleteTodo(req.params.id);
        if (!todo) return res.status(404).json({ message: 'Todo not found' });

        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
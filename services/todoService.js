const Todo = require('../model/Todo');

exports.getAllTodos = async () => {
    try {
        const todos = await Todo.find();
        return todos;
    } catch (error) {
        throw error;
    }
};

exports.getTodoById = async (id) => {
    try {
        const todo = await Todo.findById(id);
        return todo;
    }
    catch {
        throw error;
    }
}

exports.createTodo = async (todo) => {
    try {
        const newTodo = await Todo.create(todo);
        return newTodo;
    } catch (error) {
        throw error;
    }
}

exports.updateTodo = async (id, todo) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(id, todo, { new: true });
        return updatedTodo;
    } catch (error) {
        throw error;
    }
}

exports.deleteTodo = async (id) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(id);
        return deletedTodo;
    } catch (error) {
        throw error;
    }
}
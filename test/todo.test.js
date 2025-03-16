const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const todoRoutes = require('../routes/todoRoutes');

// Create an instance of the Express app
const app = express();
app.use(express.json());
app.use('/todos', todoRoutes);

// Before running tests, connect to a test database (or you can use an in-memory database)
beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/testTodoDB')
        .then(() => console.log('Connected to MongoDB!'))
        .catch(err => console.error('MongoDB connection error:', err));
});

// After tests, disconnect form database
afterAll(async () => {
    await mongoose.connection.close()
        .then(() => console.log('Disconnected from MongoDB!'))
        .catch(err => console.error('MongoDB disconnection error:', err));
});

describe('Todo API', () => {
    it('should create a new todo', async () => {
        const newTodo = { title: 'Test Todo' };
        const response = await request(app)
            .post('/todos')
            .send(newTodo)
            .expect(201);

        console.log(response.body);

        expect(response.body).toHaveProperty('_id');
        expect(response.body.title).toBe(newTodo.title);
    });

    it('should retrieve all todos', async () => {
        const response = await request(app)
            .get('/todos')
            .expect(200);

        expect(Array.isArray(response.body)).toBe(true);
    });

    it('should update a todo', async () => {
        const newTodo = await request(app)
            .post('/todos')
            .send({ title: 'Test Todo' })
            .expect(201);


        const updatedTodo = { title: 'Updated Todo' };
        const response = await request(app)
            .put(`/todos/${newTodo.body._id}`)
            .send(updatedTodo)
            .expect(200);

        expect(response.body.title).toBe(updatedTodo.title);
    })

    it('should delete a todo', async () => {
        const newTodo = await request(app)
            .post('/todos')
            .send({ title: 'Test Todo' })
            .expect(201);

        await request(app)
            .delete(`/todos/${newTodo.body._id}`)
            .expect(204);
    })
});
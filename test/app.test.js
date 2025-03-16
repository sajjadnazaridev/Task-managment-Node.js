const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');

beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/testTodoDB')
        .then(() => console.log('Connected to MongoDB Test DB!'))
        .catch(err => console.error('MongoDB connection error:', err));
});

afterAll(async () => {
    await mongoose.connection.close()
        .then(() => console.log('Disconnected from MongoDB Test DB!'))
        .catch(err => console.error('MongoDB disconnection error:', err));
});

describe('Authentication Endpoints', () => {
    it('Should register a new user', async () => {
        const res = await request(app)
            .post('/auth/register')
            .send({ username: 'testuserMain', password: 'password123' });

        console.log(res.body);
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('message', 'User registered successfully');
    });

    it('Should login a user', async () => {
        const res = await request(app)
            .post('/auth/login')
            .send({ username: 'testuser', password: 'password123' });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('token');
    });
});

describe('Users Endpoints', () => {
    it("Should get all users", async () => {
        const res = await request(app)
            .get('/users');
        expect(res.statusCode).toEqual(401);
        expect(res.body).toHaveProperty('message', 'Access denied. No token provided.');
    });
});
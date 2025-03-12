const request = require('supertest');
const app = require('../app/server');

test('GET / should return Hello, Jenkins CI/CD Pipeline!', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello, Jenkins CI/CD Pipeline!');
});

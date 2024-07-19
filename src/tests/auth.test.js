const request = require('supertest');
const app = require('../'); // Adjust the path to your Express app
const randomEmail = `testuser_${Math.random().toString(36).substring(7)}@example.com`;

let server;

beforeAll(async () => {
  server = app.listen(4001); // Use a different port for tests
});

describe('Authentication Endpoints', () => {
  it('should register a new user', async () => {
    const res = await request(server).post('/users').send({
      email: randomEmail,
      password: 'password123',
    });
    if (res.statusCode === 400) {
      expect(res.body).toHaveProperty('error', 'User already exists');
    } else {
      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('message', 'User created successfully');
    }
  });

  it('should login the user and return a token', async () => {
    const res = await request(server).post('/users/login').send({
      email: randomEmail,
      password: 'password123',
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });
});

afterAll(async () => {
  await server.close();
});

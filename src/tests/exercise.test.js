const request = require('supertest');
const app = require('../'); // Adjust the path to your Express app

let server;
let token;

beforeAll(async () => {
  server = app.listen(4002); // Use a different port for tests
  // Log in to get a token
  const res = await request(server).post('/users/login').send({
    email: 'testuser@example.com',
    password: 'password123',
  });
  token = res.body.token;
});

afterAll(async () => {
  await server.close();
});

describe('Exercise Endpoints', () => {
  it('should create a new exercise', async () => {
    const res = await request(server)
      .post('/exercises/create')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Push-Up',
        category: 'Strength',
        subcategory: 'Upper Body',
        description: 'A basic push-up exercise.',
        video: 'https://example.com/video',
      });
    if (res.statusCode === 400) {
      expect(res.body).toHaveProperty('error', 'Exercise already exists');
    } else {
      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty(
        'message',
        'Exercise created successfully'
      );
    }
  });
});

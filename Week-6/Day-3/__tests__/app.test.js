const request = require('supertest');
const app = require('../src/app');

test("Should return all fruit", async () => {
    const response = await request(app).get('/fruit');
    expect(response.body).toEqual({fruits: ["apple", "orange", "banana"]});
})
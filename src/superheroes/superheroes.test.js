const request = require('supertest');
const app = require('../index'); 

describe('Superhéroes API', () => {
  it('Debe agregar un superhéroe correctamente', async () => {
    const res = await request(app)
      .post('/superheroes')
      .send({ name: "Spider-Man", superpower: "Agilidad", humilityScore: 10 });

    expect(res.status).toBe(201);
    expect(res.body.name).toBe("Spider-Man");
  });

  it('Debe rechazar un superhéroe con índice de humildad fuera de rango', async () => {
    const res = await request(app)
      .post('/superheroes')
      .send({ name: "Iron Man", superpower: "Inteligencia", humilityScore: 15 });

    expect(res.status).toBe(400);
  });
});

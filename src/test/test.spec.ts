import request from 'supertest';
import express from 'express';

const app = express();

app.get('/user', function (req, res) {
  res.status(200).json({ name: 'john' });
});

/* request(app)
  .get('/user')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '15')
  .expect(200)
  .end(function (err) {
    if (err) throw err;
  });
 */

describe('GET /user', function () {
  it('responds with json', (done) => {
    request(app).get('/user').set('Accept', 'application/json').expect('Content-Type', /json/).expect(200, done);
  });

  it('not responds with json', function (done) {
    request(app).get('/user').set('Accept', 'text/html').expect('Content-Type', /json/).expect(200, done);
  });
});

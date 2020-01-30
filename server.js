const express = require('express');
const cors = require('cors');
const app = express();
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.use(express.json());
app.use(cors());
app.set('port', process.env.PORT || 3000);
app.locals.title = 'BYOB';

app.get('/', (request, response) => {
  response.send('View Boy Bands and the Members');
});

app.get('/api/v1/bands', (request, response) => {
    database('bands').select()
    .then((bands) => {
      response.status(200).json(bands);
    })
    .catch((error) => {
      response.status(500).json({
        error: 'Sorry there were was a problem connecting to the database.'
      });
    })
});

app.get('/api/v1/members', (request, response) => {
    database('members').select()
    .then((members) => {
      response.status(200).json(members);
    })
    .catch((error) => {
      response.status(500).json({
        error: 'Sorry there were was a problem connecting to the database.'
      });
    })
});

app.get('/api/v1/bands/:id', (request, response) => {
  const { id } = request.params;
  database('bands')
    .where({ id: id })
    .then(band => {
      if (band.length === 0) {
        response
          .status(404)
          .json({ error: `Sorry there is not a band with an id of ${id}! Please try again.` });
      }
      response.status(200).json(band[0]);
    })
    .catch((error) => {
      response.status(500).json({
        error: 'Sorry there were was a problem connecting to the database.'
    });
  })
});

app.get('/api/v1/members/:id', (request, response) => {
  const { id } = request.params;
  database('members')
    .where({ id: id })
    .then(band => {
      if (band.length === 0) {
        response
          .status(404)
          .json({ error: `Sorry there is not a member in the band with an id of ${id}! Please try again.` });
      }
      response.status(200).json(band[0]);
    })
    .catch((error) => {
      response.status(500).json({
        error: 'Sorry there were was a problem connecting to the database.'
    });
  })
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});
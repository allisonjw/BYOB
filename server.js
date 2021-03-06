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
  response.send('View Bands and the Members');
});

// get, get by id, post and delete by id bands
app.get('/api/v1/bands', (request, response) => {
    database('bands').select()
    .then((bands) => {
      response.status(200).json(bands);
    })
    .catch((error) => {
      response.status(500).json({
        error: 'Sorry there were was a problem connecting to the database.'
      });
    });
});

app.get('/api/v1/bands/:id', (request, response) => {
  const { id } = request.params;
  database('bands')
    .where({ id: id })
    .then(band => {
      band.length === 0 
      ? response.status(404).json({ error: `Sorry there is not a band with an id of ${id}! Please try again.` }) 
      : response.status(200).json(band[0]);
    })
    .catch((error) => {
      response.status(500).json({
        error: 'Sorry there were was a problem connecting to the database.'
      });
    });
});

app.post('/api/v1/bands', async (request, response) => {
  const newBand = request.body;

  for (let requiredParameter of ['band', 'highest_song', 'featuring_artist', 'highest_song_vid']) {
    if (!newBand[requiredParameter]) {
      return response
        .status(422)
        .json({ error: `Expected format: { band: <String>, highest_song: <String> , featuring_artist: <String>, highest_song_vid: <String>}. You're missing a "${requiredParameter}" property.` });
    }
  }

  database('bands').insert(newBand, 'id')
    .then(band => {
      response.status(201).json(`Band with id of ${band[0]} successfully created!`)
    })
    .catch(error => {
      response.status(500).json({ error })
    });
});

app.delete('/api/v1/bands/:id', (request, response) => {
  const { id } = request.params;
  database('bands')
    .where({ id: id })
    .select()
    .del()
    .then(results => {
      results === 0 
      ? response.status(404).json(`Sorry there is no band with the id of ${id}`)
      : response.status(200).json(`Band with the id of ${id} successfully deleted.`);
    })
    .catch((error) => {
      response.status(500).json({
        error: 'Sorry there were was a problem connecting to the database.'
      });
    });
});

// get, get by id and post members

app.get('/api/v1/members', (request, response) => {
  database('members').select()
  .then((members) => {
    response.status(200).json(members);
  })
  .catch((error) => {
    response.status(500).json({
      error: 'Sorry there were was a problem connecting to the database.'
    });
  });
});

app.get('/api/v1/members/:id', (request, response) => {
  const { id } = request.params;
  database('members')
    .where({ id: id })
    .then(band => {
      band.length === 0 
      ? response.status(404).json({ error: `Sorry there is not a member in the band with an id of ${id}! Please try again.` }) 
      : response.status(200).json(band[0]);
    })
    .catch((error) => {
      response.status(500).json({
        error: 'Sorry there were was a problem connecting to the database.'
      });
    });
});

app.post('/api/v1/members', async (request, response) => {
  const newMember = request.body;

  for (let requiredParameter of ['band_name', 'name', 'dob', 'hair_color', 'eyes']) {
    if (!newMember[requiredParameter]) {
      return response.status(422).json({ error: `Expected format: { band_name: <String>, name: <String> , dob: <String>, hair_color: <String>, eyes: <String>}. You're missing a "${requiredParameter}" property.` });
    }
  }

  database('members').insert(newMember, 'id')
    .then(member => {
      response.status(201).json(`Band member with id of ${member[0]} successfully created!`)
    })
    .catch(error => {
      response.status(500).json({ error })
    });
});

app.delete('/api/v1/members/:id', (request, response) => {
  const { id } = request.params;
  database('members')
    .where({ id: id })
    .select()
    .del()
    .then(results => {
      results === 0 
      ? response.status(404).json(`Sorry there is no member with the id of ${id}`)
      : response.status(200).json(`Member with the id of ${id} successfully deleted.`);
    })
    .catch((error) => {
      response.status(500).json({
        error: 'Sorry there were was a problem connecting to the database.'
      });
    });
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});
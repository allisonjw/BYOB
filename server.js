// imports express middleware
const express = require('express');
// require cors to share data with domains that are not the origin
const cors = require('cors');
// creates the app object
const app = express();
// sets the environment to process or development
const environment = process.env.NODE_ENV || 'development';
// based on the environment, fetch the database configuration from knexfile.js
const configuration = require('./knexfile')[environment];
// defines the configuration of our database
const database = require('knex')(configuration);

// tells our app to use express middleware and parse into JSON
app.use(express.json());
// tell our app to use the cors policy
app.use(cors());
// tells our app to set the port to heroku or the localhost 3000
app.set('port', process.env.PORT || 3000);
// creates a local storage object titled BYOB
app.locals.title = 'BYOB';

// 
app.get('/', (request, response) => {
  response.send('View Bands and the Members');
});

// creates a get endpoint for '/api/v1/bands'
app.get('/api/v1/bands', (request, response) => {
    // selects the bands file from the database
    database('bands').select()
    // then once we get the data.....
    .then((bands) => {
      // send the response status 200 back with a json object of bands
      response.status(200).json(bands);
    })
    .catch((error) => {
      // if there is no data send back the response status 500 with the error line message
      response.status(500).json({
        error: 'Sorry there were was a problem connecting to the database.'
      });
    })
});

// creates a get endpoint for '/api/v1/bands/:id' based on the id
app.get('/api/v1/bands/:id', (request, response) => {
      // selects the members file from the database
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
  })
});

// set a POST endpoint to '/api/v1/bands'
app.post('/api/v1/bands', async (request, response) => {
  // sets a variable named newBand to the request.body
  const newBand = request.body;
// 
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
  })
});

// creates a DELETE
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
    .catch(error => {
      response.status(404).json({ error });
    });
});

// creates a GET endpoint to '/api/v1/members'
app.get('/api/v1/members', (request, response) => {
  database('members').select()
  // then once we get the data.....
  .then((members) => {
    // send the response status 200 back with a json object of members
    response.status(200).json(members);
  })
  .catch((error) => {
    // if there is no data send back the response status 500 with the error line message
    response.status(500).json({
      error: 'Sorry there were was a problem connecting to the database.'
    });
  })
});

// creates a get endpoint for '/api/v1/members/:id' based on the id
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
  })
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
  })
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
    .catch(error => {
      response.status(404).json({ error });
    });
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});
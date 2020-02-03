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

// creates a root endpoint and displays the response to the user
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
      // display response status 500 with the error line message if server side error
      response.status(500).json({
        error: 'Sorry there were was a problem connecting to the database.'
      });
    })
});

// creates a get endpoint for '/api/v1/bands/:id' based on the id
app.get('/api/v1/bands/:id', (request, response) => {
  // sets the request params to a constant and deconstructs the id
  const { id } = request.params;
  database('bands')
  // selects the data object from bands where the id matches
    .where({ id: id })
    .then(band => {
      band.length === 0 
      //if nothing matches the id display client side error response status 404 with error line
      ? response.status(404).json({ error: `Sorry there is not a band with an id of ${id}! Please try again.` }) 
      // or display response status 200 if there is a match
      : response.status(200).json(band[0]);
    })
    .catch((error) => {
       // display response status 500 with the error line message if server side error
      response.status(500).json({
        error: 'Sorry there were was a problem connecting to the database.'
    });
  })
});

// set a POST endpoint to '/api/v1/bands' to add a new band
app.post('/api/v1/bands', async (request, response) => {
  // sets a variable named newBand and set to the value of the request.body
  const newBand = request.body;
// creates a for loop defining the array of required parameter to post a new band
  for (let requiredParameter of ['band', 'highest_song', 'featuring_artist', 'highest_song_vid']) {
    // if there is a missing parameter display client side error response status with error line telling user what parameter is missing
    if (!newBand[requiredParameter]) {
      return response
        .status(422)
        .json({ error: `Expected format: { band: <String>, highest_song: <String> , featuring_artist: <String>, highest_song_vid: <String>}. You're missing a "${requiredParameter}" property.` });
    }
  }
// Or insert the new band into the bands database with the new band id
  database('bands').insert(newBand, 'id')
    .then(band => {
      // display response status of ok with message for user
      response.status(201).json(`Band with id of ${band[0]} successfully created!`)
    })
    .catch(error => {
       // display response status 500 with the error line message if server side error
      response.status(500).json({ error })
  })
});

// creates a DELETE endpoint to delete a band based on id
app.delete('/api/v1/bands/:id', (request, response) => {
    // sets the request params to a constant and deconstructs the id
  const { id } = request.params;
  database('bands')
    // selects the data object from bands where the id matches
    .where({ id: id })
    // select that id entered in the url
    .select()
    // delete that object from the dataset
    .del()
    .then(results => {
      results === 0 
      //if nothing matches the id display client side error response status 404 with error line
      ? response.status(404).json(`Sorry there is no band with the id of ${id}`)
      // or display success response status 200 if there is a match and it's deleted
      : response.status(200).json(`Band with the id of ${id} successfully deleted.`);
    })
    .catch(error => {
      // display response status 500 with the error line message if server side error
      response.status(500).json({ error });
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
   // display response status 500 with the error line message if server side error
    response.status(500).json({
      error: 'Sorry there were was a problem connecting to the database.'
    });
  })
});

// creates a get endpoint for '/api/v1/members/:id' based on the id
app.get('/api/v1/members/:id', (request, response) => {
    // sets the request params to a constant and deconstructs the id
  const { id } = request.params;
  database('members')
    // selects the data object from members where the id matches
    .where({ id: id })
    .then(band => {
      band.length === 0 
      //if nothing matches the id display client side error response status 404 with error line
      ? response.status(404).json({ error: `Sorry there is not a member in the band with an id of ${id}! Please try again.` }) 
        // send the response status 200 back with a json object of member
      : response.status(200).json(band[0]);
    })
    .catch((error) => {
       // display response status 500 with the error line message if server side error
      response.status(500).json({
        error: 'Sorry there were was a problem connecting to the database.'
    });
  })
});

// creates POST endpoint to add a new member
app.post('/api/v1/members', async (request, response) => {
    // sets a variable named newMember and set to the value of the request.body
  const newMember = request.body;
// creates a for loop defining the array of required parameter to post a new member
for (let requiredParameter of ['band_name', 'name', 'dob', 'hair_color', 'eyes']) {
      // if there is a missing parameter display client side error response status with error line telling user what parameter is missing
    if (!newMember[requiredParameter]) {
      return response.status(422).json({ error: `Expected format: { band_name: <String>, name: <String> , dob: <String>, hair_color: <String>, eyes: <String>}. You're missing a "${requiredParameter}" property.` });
    }
  }
// Or insert the new member into the members database with the new member id
database('members').insert(newMember, 'id')
    .then(member => {
      // display response status of ok with message for user
      response.status(201).json(`Band member with id of ${member[0]} successfully created!`)
    })
    .catch(error => {
       // display response status 500 with the error line message if server side error
      response.status(500).json({ error })
  })
});

// create DELETE endpoint to delete a member based on the id
app.delete('/api/v1/members/:id', (request, response) => {
    // sets the request params to a constant and deconstructs the id
  const { id } = request.params;
  database('members')
    // selects the data object from members where the id matches
    .where({ id: id })
      // select that id entered in the url
    .select()
      // delete that object from the dataset
    .del()
    .then(results => {
      //if nothing matches the id display client side error response status 404 with error line
      results === 0 
      ? response.status(404).json(`Sorry there is no member with the id of ${id}`)
      // or display success response status 200 if there is a match and it's deleted
      : response.status(200).json(`Member with the id of ${id} successfully deleted.`);
    })
    .catch(error => {
      // display response status 500 with the error line message if server side error
      response.status(500).json({ error });
    });
});

// get server running and listening for requests
app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});
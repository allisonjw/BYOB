const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.set('port', process.env.PORT || 3000);
app.locals.title = 'BYOB';

app.get('/', (request, response) => {
  response.send('Oh hey BYOB');
});

app.get('/api/v1/bands', (request, response) => {
    database('bands').select()
    .then((bands) => {
      if (!bands) {
        return response.status(404).send({
          error: 'The bands data can not be found.'
        });
      }
      response.status(200).json(bands);
    })
    .catch((error) => {
      response.status(500).send({
        error: 'There were problems connecting to the database.'
    });
  })
});

app.get('/api/v1/bands/:id', (request, response) => {
  const { id } = request.params;
  database('bands').select()
    .then((bands) => {
      const selectedBand = bands.find((set) => {
        return set.inc_id === parseInt(id)
      })
      if (!selectedBand) {
        return response.status(404).send({
          error: 'The set data you are looking for can not be found. Please try another set id.'
        });
      }
      response.status(200).json(selectedSet);
    })
    .catch((error) => {
      response.status(500).send({
        error: 'There were problems connecting to the database.'
    });
  })
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});
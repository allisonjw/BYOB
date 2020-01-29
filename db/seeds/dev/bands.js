const bandsData = require('../../../data/bandsData');

const createBand = (knex, band) => {
  return knex('bands').insert({
    band: band.band,
    highest_song: band.highest_song,
    featuring_artist: band.featuring_artist,
    highest_song_vid: band.highest_song_vid,
  }, 'id')
};

exports.seed = (knex) => {
  return knex('bands').del()
  .then(() => {
    let bandsPromises = [];
    bandsData.forEach(band => {
      bandsPromises.push(createBand(knex, band))
    });
    return Promise.all(bandsPromises);
  })
  .catch(error => console.error(`Error seeding data ${error}`));
};

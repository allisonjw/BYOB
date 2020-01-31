const bandsData = require('../../../data/bandsData');
const membersData = require('../../../data/boysData');

const createBand = (knex, band) => {
  return knex('bands').insert({
    bandName: band.band,
    band: band.band,
    highest_song: band.highest_song,
    featuring_artist: band.featuring_artist,
    highest_song_vid: band.highest_song_vid
  }, 'bandName')
  .then(bandName => {
    let membersPromises = [];
    membersData
      .filter(member => member.band === bandName[0])
      .forEach(member => {
        membersPromises.push(
          createMember(knex, {
            name: member.name,
            band_name: bandName[0],
            dob: member.dob,
            hair_color: member.hair_color,
            hair_color: member.hair_color,
            eyes: member.eyes,
          })
        )
      });

    return Promise.all(membersPromises)
  })
}

const createMember = (knex, member) => {
  return knex('members').insert(member)
}

exports.seed = function(knex) {
  return knex('members').del()
    .then(() => knex('bands').del())
    .then(() => {
      let bandPromises = [];
      bandsData.forEach(band => {
        bandPromises.push(createBand(knex, band))
      })
      return Promise.all(bandPromises)
    })
    .catch(error => console.log(`Error seeding data ${error}`))
};
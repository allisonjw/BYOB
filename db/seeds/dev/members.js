
const membersData = require('../../../data/boysData');

const createMember = (knex, member) => {
  return knex('members').insert({
    band: member.band,
    // bands_Id: bandId[0],
    name: member.name,
    dob: member.dob,
    hair_color: member.hair_color,
    eyes: member.eyes,
  }, 'id')
};

exports.seed = (knex) => {
  return knex('members').del()
  .then(() => {
    let membersPromises = [];
    membersData.forEach(member => {
      membersPromises.push(createMember(knex, member))
    });
    return Promise.all(membersPromises);
  })
  .catch(error => console.error(`Error seeding data ${error}`));
};
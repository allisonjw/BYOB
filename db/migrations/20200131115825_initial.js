exports.up = knex => {
    return Promise.all([
      knex.schema.createTable('bands', table => {
        table.increments('id').primary();
        table.string('bandName');
        table.unique('bandName');
        table.string('band');
        table.string('highest_song');
        table.string('featuring_artist');
        table.string('highest_song_vid');
        table.timestamps(true, true);
      }),
  
      knex.schema.createTable('members', table => {
        table.increments('id').primary();
        table.string('name');
        table.string('dob');
        table.string('hair_color');
        table.string('eyes');
        table.string('band_name');
        table.foreign('band_name').references('bands.bandName');
        table.timestamps(true, true);
      })
    ]);
  };
  
  exports.down = knex => {
    return Promise.all([
      knex.schema.dropTable('members'),
      knex.schema.dropTable('bands')
    ]);
  };



  

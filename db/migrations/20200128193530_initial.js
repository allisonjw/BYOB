exports.up = knex => {
    return Promise.all([
      knex.schema.createTable('bands', table => {
        table.increments('id').primary();
        table.string('band_id');
        table.unique('band_id');
        table.string('band');
        table.integer('highest_pos');
        table.string('highest_pos_date');
        table.string('highest_song');
        table.string('danceSpeed');
        table.string('featuring_artist');
        table.string('highest_song_vid');
        table.timestamps(true, true);
      }),
  
      knex.schema.createTable('members', table => {
        table.string('band');
        table.increments('id').primary();
        table.string('name');
        table.string('dob');
        table.string('hair_color');
        table.string('hair_frosted');
        table.string('hair_length');
        table.string('hair_style');
        table.string('eyes');
        table.string('facial_hair');
        table.string('accessories');
        table.string('top_style');
        table.string('bottom_style');
        table.string('skin');
        table.string('shirt_color');
        table.string('bottom_color');
        table.integer('bandsId').unsigned();
        table.foreign('bandsId').references('bands.id');
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
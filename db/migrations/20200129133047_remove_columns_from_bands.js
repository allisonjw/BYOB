exports.up = (knex, Promise) => {
    return knex.schema.table('bands', table => {
        table.dropColumn('highest_pos');
        table.dropColumn('highest_pos_date');
        table.dropColumn('danceSpeed');
    });
};

exports.down = (knex, Promise) => {
    return knex.schema.table('bands', table => {
        table.integer('highest_pos');
        table.string('highest_pos_date');
        table.string('danceSpeed');
    });
};


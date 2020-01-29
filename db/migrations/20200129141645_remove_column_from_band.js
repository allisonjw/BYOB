exports.up = (knex, Promise) => {
    return knex.schema.table('bands', table => {
        table.dropColumn('band_id');
    });
};

exports.down = (knex, Promise) => {
    return knex.schema.table('bands', table => {
        table.string('band_id');
        table.unique('band_id');
    });
};


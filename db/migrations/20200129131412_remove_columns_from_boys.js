exports.up = (knex, Promise) => {
    return knex.schema.table('members', table => {
        table.dropColumn('hair_frosted');
        table.dropColumn('hair_length');
        table.dropColumn('hair_style');
        table.dropColumn('facial_hair');
        table.dropColumn('accessories');
        table.dropColumn('top_style');
        table.dropColumn('bottom_style');
        table.dropColumn('skin');
        table.dropColumn('shirt_color');
        table.dropColumn('bottom_color');
    });
};

exports.down = (knex, Promise) => {
    return knex.schema.table('members', table => {
        table.string('hair_frosted');
        table.string('hair_length');
        table.string('hair_style');
        table.string('facial_hair');
        table.string('accessories');
        table.string('top_style');
        table.string('bottom_style');
        table.string('skin');
        table.string('shirt_color');
        table.string('bottom_color');
    });
};

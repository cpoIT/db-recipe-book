
exports.up = function(knex, Promise) {
          // make changes to the database
          return knex.schema.createTable('dishes', table => {

            // primary key
            // by default it generates an id field and make it autoincrement and the primary key. Default tbl.increments('id');
            table.increments(); // could change to tbl.increments('cohorts_id');
        
            // other fields
            table.string('name', 255);
            table.timestamps(true, true)
          })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dishes');
};


exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.text('vin', 64).unique().notNullable();
        tbl.text('make', 64).notNullable();
        tbl.text('model', 64).notNullable();
        tbl.decimal('mileage').notNullable();
        tbl.text('transmission');
        tbl.text('titleStatus');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
  };


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin: 'JF2SJAUC7FH474944', make: 'Ford', model: 'Fusion', mileage: '22586', transmission: 'automatic', titleStatus: 'clear'},
        {vin: '3D4GH57V39T153092', make: 'Ford', model: 'Focus', mileage: '97405', transmission: 'manual', titleStatus: 'clear'},
        {vin: '1G6DP577170180812', make: 'Dodge', model: 'Neon', mileage: '214557', transmission: 'manual', titleStatus: 'salvaged'},
        {vin: '2CNBJ13C8Y6938263', make: 'Honda', model: 'Accord', mileage: '175450', transmission: 'manual', titleStatus: 'salvaged'}
      ]);
    });
};
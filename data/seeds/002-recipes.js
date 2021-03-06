
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'Tex-Mex Tacos', step_id: 1, dish_id: 1 },
        {id: 2, name: "Tia's Tacos", step_id: 1, dish_id: 1 },
        {id: 3, name: 'La Pasta Fresca', step_id: 2, dish_id: 2 }
      ]);
    });
};

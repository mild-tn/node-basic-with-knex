exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          firstName: 'Nigel',
          lastName: 'Mild',
          email: 'nigel@email.com',
          createdAt: new Date(),
        },
        {
          id: 2,
          firstName: 'Test2',
          lastName: 'nakaz',
          email: 'nakaz@email.com',
          createdAt: new Date(),
        },
        {
          id: 3,
          firstName: 'Test3',
          lastName: 'jaywon',
          email: 'jaywon@email.com',
          createdAt: new Date(),
        },
      ]);
    });
};

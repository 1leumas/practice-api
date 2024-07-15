const sqliteConnection = require('../');
const createUsers = require('./createUsers');
const createExercises = require('./createExercises');

async function migrationsRun() {
  const schemas = [createUsers, createExercises].join('');

  sqliteConnection()
    .then((db) => db.exec(schemas))
    .catch((error) => console.error(error));
}

module.exports = migrationsRun;

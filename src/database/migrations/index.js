const sqliteConnection = require('../');
const createUsers = require('./createUsers');
const createExercises = require('./createExercises');
const createWorkouts = require('./createWorkouts');
const createWorkoutsExercises = require('./createWorkoutsExercises');

async function migrationsRun() {
  const schemas = [
    createUsers,
    createExercises,
    createWorkouts,
    createWorkoutsExercises,
  ].join('');
  sqliteConnection()
    .then((db) => db.exec(schemas))
    .catch((error) => console.error(error));
}

module.exports = migrationsRun;

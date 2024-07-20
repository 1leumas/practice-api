const createWorkoutsExercises = `
    CREATE TABLE IF NOT EXISTS
        workout_exercises (
            workout_id INTEGER NOT NULL,
            exercise_id INTEGER NOT NULL,
            FOREIGN KEY (workout_id) REFERENCES workouts(id),
            FOREIGN KEY (exercise_id) REFERENCES exercises(id),
            PRIMARY KEY (workout_id, exercise_id)
    );
`;

module.exports = createWorkoutsExercises;

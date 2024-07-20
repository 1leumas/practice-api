const createWorkouts = `
    CREATE TABLE IF NOT EXISTS
        workouts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            name TEXT NOT NULL,
            FOREIGN KEY (user_id) REFERENCES users(id)
    );
`;

module.exports = createWorkouts;

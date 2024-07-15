const createExercises = `
    CREATE TABLE IF NOT EXISTS
        exercises (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR,
            category VARCHAR,
            subcategory VARCHAR,
            description VARCHAR,
            video VARCHAR,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
`;

module.exports = createExercises;

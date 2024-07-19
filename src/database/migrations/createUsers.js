const createUsers = `
    CREATE TABLE IF NOT EXISTS
        users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email VARCHAR,
            password VARCHAR,
            role VARCHAR DEFAULT 'user',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
`;

module.exports = createUsers;

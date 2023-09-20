export const clientTableQuery = `
  CREATE TABLE IF NOT EXISTS clients (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    document   VARCHAR(50) NOT NULL UNIQUE,
    name       VARCHAR(255) NOT NULL,
    email      VARCHAR (50),
    address    TEXT,
    createdAt  TEXT NOT NULL
  );
`

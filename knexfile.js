const path = require("path");

require("dotenv").config();

const { DATABASE_URL = "postgres://duvkbxvl:tqSh8ey7ccPvqsIHZxILLs9xJx9LPwgo@heffalump.db.elephantsql.com/duvkbxvl" } = 
process.env;

module.exports = {
  development: {
    client: "pg",
    connection: DATABASE_URL,
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "/db/migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "/db/seeds"),
    },
  },

  production: {
    client: "pg",
    connection: DATABASE_URL,
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "/db/migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "/db/seeds"),
    },
  },

  test: {
    client: "sqlite3",
    connection: {
      filename: ":memory:",
    },
    migrations: {
      directory: path.join(__dirname, "/db/migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "/db/seeds"),
    },
    useNullAsDefault: true,
  },
};

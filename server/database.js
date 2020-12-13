const Pool = require("pg").Pool;
const pool = new Pool({
  host: "postgres",
  port: 5432,
  user: "postgres",
  password: "postgres",
  database: "db",
});

module.exports = pool;

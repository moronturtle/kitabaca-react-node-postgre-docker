const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3001;

const pool = require("./database");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/authentication", require("./routes/jwtAuth"));
app.use("/dashboard", require("./routes/dashboard"));

app.get("/", (request, response) => {
  response.json({ info: "It works!" });
});
app.get("/test_query", (request, response) => {
  let q = "SELECT * FROM users ORDER BY user_id ASC";
  pool.query(q, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
});
app.listen(port, () => {
  console.log(`running in port ${port}.`);
});

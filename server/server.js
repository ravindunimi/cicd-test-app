const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ users: ["Ravindu", "Layla", "Peter", "Kevin"] });
});

app.get("/members", (req, res) => {
  res.json({ users: ["Silvana", "David", "Victor"] });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});

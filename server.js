const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const fs = require("fs");

app.use(express.json());
app.use(express.static("public"));

app.post("/jokes", (req, res) => {
  let language = req.body.language;

  fs.readFile(`languageModule/languages/${language}.json`, (err, data) => {
    if (err) {
      res.status(500).json({ error: "Error reading file" });
      return;
    }

    let languageJokes = JSON.parse(data);
    let joke = languageJokes[Math.floor(Math.random() * languageJokes.length)];

    res.json({ joke });
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
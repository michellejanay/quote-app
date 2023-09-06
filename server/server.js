//load the 'express' module which makes writing webservers easy
const express = require("express");
const lodash = require("lodash");
const app = express();
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

//load the quotes JSON
const quotes = require("./quotes.json");

app.get("/", (request, response) => {
  response.send(
    "Michelle's Quote Server!  Ask me for /quotes/random, or /quotes"
  );
});

//START OF YOUR CODE...
app.get("/quotes", (req, res) => {
  res.json(quotes);
});

app.get("/quotes/random", (req, res) => {
  res.json(lodash.sample(quotes));
});

app.get("/quotes/search", (req, res) => {
  let qoutesCopy = quotes;
  const term = req.query.term;

  term &&
    res.json(
      qoutesCopy.filter(
        (q) =>
          q.quote.toLowerCase().includes(term) ||
          q.author.toLocaleLowerCase().includes(term)
      )
    );
});

//Start our server so that it listens for HTTP requests!
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

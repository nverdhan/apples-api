const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const ALL_ALPHABETS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let ALPHABETS = [];

const initializeAlpha = function () {
  ALPHABETS = [];
  for (let i = 0; i < ALL_ALPHABETS.length; i++) {
    ALPHABETS.push(ALL_ALPHABETS[i]);
  }
};

initializeAlpha();

app.get('/api/alphabets', (req, res, next) => {
  let index = parseInt(req.query.index, 10);

  if (!Number.isFinite(index)) {
    return res.json(ALPHABETS);
  }

  if (index >= ALPHABETS.length) {
    index = index - ALPHABETS.length;
  }

  res.json(ALPHABETS[index]);
});

app.post('/api/alphabets', (req, res, next) => {
  let index = parseInt(req.query.index, 10);
  let add = req.query.add;

  if (typeof add === 'undefined') {
    return res.status(400).send('Invalid add query param');
  }

  if (!Number.isFinite(index)) {
    return res.status(400).send('Index is not defined');
  }

  if (index >= ALPHABETS.length) {
    index = index - ALPHABETS.length;
  }

  ALPHABETS[index] = ALPHABETS[index] + add.toString();

  res.end();
});

app.post('/api/alphabets/reset', (req, res, next) => {
  initializeAlpha();

  res.end();
});

app.listen(PORT);
console.log(`Express server listening on port ${PORT}`);

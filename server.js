
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'app/public')));

app.get('/source', (req, res) => {
  res.sendFile(path.join(`${__dirname}/app/public/source.html`));
});

app.get('/target', (req, res) => {
  res.sendFile(path.join(`${__dirname}/app/public/target.html`));
});

const port = process.env.PORT || 3000;
app.listen(port);
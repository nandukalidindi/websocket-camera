
const express = require('express');
const path = require('path');
const WebSocket = require('ws');

const app = express();

const wss = new WebSocket.Server({
  port: 4000
});

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    wss.clients.forEach(function each(client) {
      if(client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data)
      }
    })
  })
})

app.use(express.static(path.join(__dirname, 'app/')));

app.get('/source', (req, res) => {
  res.sendFile(path.join(`${__dirname}/app/public/source.html`));
});

app.get('/target', (req, res) => {
  res.sendFile(path.join(`${__dirname}/app/public/target.html`));
});

const port = process.env.PORT || 3000;
app.listen(port);
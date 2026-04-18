const express = require('express');
const http = require('http');
require('dotenv').config();

const open = (...args) => import('open').then(m => m.default(...args));

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(
    'Hello, MERN batch 3 2026! I am running on Node.js server. My name is Juliana and I am a student of MERN batch 3 2026. I am learning Node.js and Express.js to build backend applications.');
});

server.listen(PORT, async () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  if (process.env.NODE_ENV !== 'production') {
    await open(`http://localhost:${PORT}`);
  }
});
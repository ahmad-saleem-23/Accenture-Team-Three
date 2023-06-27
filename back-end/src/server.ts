import express from 'express';

const server = express();

// Middleware
server.use(express.json());

// Routes
server.get('/', (req, res) => {
  res.send('Hello, world!');
});

server.get('/profile', (req, res) => {
  res.send('Hello, world!');
});

export default server;

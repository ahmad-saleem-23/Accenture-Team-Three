import server from './server';

const port = 3000;

// Start the server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

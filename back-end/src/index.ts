import server from './server';

const port = 19000;

// Start the server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

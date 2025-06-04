const http = require("http"); // load http module

// create a basic server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // success code
  res.setHeader("Content-Type", "text/plain"); // plain text response
  res.end("Hello, World! This is my first node js app"); // send message
});

const port = 8000; // port to listen on

server.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});

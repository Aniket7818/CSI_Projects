const http = require("http"); // Load the built-in HTTP module
const fs = require("fs"); // Load the built-in File System module

// Create a basic HTTP server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html"); // Set response type to HTML

  // Read the index.html file and send it as response
  fs.readFile("index.html", (error, data) => {
    if (error) {
      res.statusCode = 404;
      res.write("Error: File Not Found!");
    } else {
      res.write(data);
    }
    res.end();
  });
});

const port = 8000;

// Start the server and handle potential startup errors
server.listen(port, (error) => {
  if (error) {
    console.log(`Something went wrong: ${error}`);
  } else {
    console.log(`Server is listening on http://localhost:${port}`);
  }
});

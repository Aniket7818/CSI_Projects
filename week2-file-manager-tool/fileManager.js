const fs = require("fs");
const path = require("path");

// Define the base directory for file operations
const basePath = path.join(__dirname, "files");

// Create the "files" directory if it doesn't exist
if (!fs.existsSync(basePath)) {
  fs.mkdirSync(basePath);
}

// Function to create a new file with content
const createFile = (filename, content) => {
  const filePath = path.join(basePath, filename);
  fs.writeFileSync(filePath, content, "utf8");
  return `File "${filename}" created successfully.`;
};

// Function to read content of a file
const readFile = (filename) => {
  const filePath = path.join(basePath, filename);
  if (!fs.existsSync(filePath)) return `File "${filename}" does not exist.`;
  return fs.readFileSync(filePath, "utf8");
};

// Function to delete a file
const deleteFile = (filename) => {
  const filePath = path.join(basePath, filename);
  if (!fs.existsSync(filePath)) return `File "${filename}" does not exist.`;
  fs.unlinkSync(filePath);
  return `File "${filename}" deleted successfully.`;
};

module.exports = { createFile, readFile, deleteFile };

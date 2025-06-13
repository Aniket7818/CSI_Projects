# Celebal Internship - Node.js Week 2 Project: File Manager Tool

## 📄 Description

This project is a simple **File Manager Tool** built using **Node.js core modules only** – no external libraries required.

It runs an HTTP server and allows users to:

- ➕ Create files
- 📄 Read files
- 🗑️ Delete files

All files are stored inside a `files/` directory which is created automatically when the server starts.

---

## 🛠️ Core Modules Used

- `http` – To create the server
- `fs` – For file system operations
- `path` – To manage safe file paths
- `url` – To parse query parameters from the URL

---

## 🚀 How to Run the Project

### ✅ Prerequisites

- [Node.js](https://nodejs.org) must be installed on your system.

### ▶️ Steps to Run

1. Clone or download the project.
2. Open a terminal and navigate to the project directory.
3. Start the server using:

- bash
- npm start

## 🌐 Test the Application

After starting the server, open these links in your browser:

### ➕ Create a file

[http://localhost:4000/create?filename=test.txt&content=HelloWorld]

### 📄 Read the file

[http://localhost:4000/read?filename=test.txt]

### 🗑️ Delete the file

[http://localhost:4000/delete?filename=test.txt]

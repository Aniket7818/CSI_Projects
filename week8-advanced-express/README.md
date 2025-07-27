# Week 8: Advanced Express.js Features

This project demonstrates how to add **advanced features** to an Express.js application, including:

- File Upload with Multer
- Centralized Error Handling Middleware
- Integration with a Third-Party API (OpenWeatherMap)

---

## Folder Structure

```
week8-advanced-express/
├── uploads/             # Uploaded files
├── routes/
│   ├── upload.js        # File upload routes
│   └── weather.js       # Weather API integration
├── middleware/
│   └── errorHandler.js  # Centralized error handling
├── server.js            # Main application entry point
└── package.json
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd week8-advanced-express
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` (Optional if you use API key in code directly)

```
API_KEY=your_openweather_api_key
```

---

## Running the Application

```bash
node server.js
```

The server will run at: `http://localhost:3000`

---

## 📤 File Upload API

### `POST /api/upload`

- Accepts: `multipart/form-data`
- Field: `file`

#### Response

```json
{
  "message": "File uploaded successfully",
  "file": {
    "filename": "timestamp-filename.ext",
    ...
  }
}
```

---

## 🌤 Weather API Integration

### `GET /api/weather/:city`

Returns current weather data for the provided city using OpenWeatherMap.

#### Example

```bash
curl http://localhost:3000/api/weather/London
```

---

## Centralized Error Handling

All unhandled errors are caught and formatted via middleware.

---

## Testing

Use **Postman**, **Thunder Client**, or `curl` to test:

1. File Upload:
   - `POST /api/upload` with `form-data`
2. Weather API:
   - `GET /api/weather/delhi`
3. Simulate error and test response

---

## Tech Stack

- Node.js
- Express.js
- Multer (for file uploads)
- Axios (for HTTP requests)
- OpenWeatherMap API

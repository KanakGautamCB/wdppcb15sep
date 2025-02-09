# URL Shortener Project

This project is a simple URL shortener built using NodeJS, MongoDB, and Mongoose.It includes a backend server with Express.js, a MongoDB database for storing URLs, and a minimal frontend to display and manage shortened URLs.The short IDs are generated using the `nanoid` npm package.

## Prerequisites

    - Node.js and npm installed
    - MongoDB account or local MongoDB instance
    - Basic knowledge of JavaScript, Node.js, and MongoDB

## Project Setup

### 1. Initialize the Project

```bash
mkdir url-shortener
cd url-shortener
npm init -y
```

### 2. Install Dependencies

Install the necessary packages:

```bash
npm install express mongoose dotenv nanoid
```

### 3. Set Up Folder Structure

```bash
mkdir models routes views public
touch server.js .env
```

## Setting Up MongoDB

### 1. Create a MongoDB Database

Sign up at[MongoDB Atlas](https://www.mongodb.com/) if you don’t already have an account, create a new cluster, and get your database connection string.

### 2. Configure Environment Variables

In your `.env` file, add your MongoDB URI:

```plaintext
MONGODB_URI=your-mongodb-uri-here
PORT=3000
```

### 3. Connect MongoDB to Node.js

In `server.js`, import Mongoose and connect it to MongoDB.

```javascript
const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error("MongoDB connection error:", error));

app.listen(3000, () => console.log("Server started on http://localhost:3000"));
```

## Creating the Mongoose Schema

Define a schema to manage URLs.

1. In `models`, create `Url.js`:

```javascript
const mongoose = require("mongoose");
        async function generateShortId() {
            const { nanoid } = await import('nanoid');
            return nanoid(7);
        }

const urlSchema = new mongoose.Schema({
    originalUrl: { type: String, required: true },
    shortId: { type: String, required: false },
    date: { type: Date, default: Date.now }
});

urlSchema.pre('save', function (next) {
    if (!this.shortId) {
        generateShortId().then(id => {
            this.shortId = id;
            next();
        })
    }
    else next();
});

module.exports = mongoose.model('Url', urlSchema); 
```

## Backend Routes

Define routes for URL creation and redirection.

1. In `routes`, create `urlRoutes.js`:

```javascript
const express = require("express");
const Url = require("../models/Url");
const router = express.Router();

router.post("/shorten", async (req, res) => {
    const { originalUrl } = req.body;
    if (!originalUrl) return res.status(400).json({ message: "Invalid URL" });

    try {
        const url = new Url({ originalUrl });
        await url.save();
        res.json(url);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

router.get("/:shortUrl", async (req, res) => {
    const { shortUrl } = req.params;
    try {
        const url = await Url.findOne({ shortId: shortUrl });
        if (url) return res.redirect(url.originalUrl);
        res.status(404).json({ message: "URL not found" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
```

2. Link routes in `server.js`:

```javascript
const urlRoutes = require("./routes/urlRoutes");
app.use(express.json());
app.use("/api", urlRoutes);
```

## Frontend Interface

1. Create `index.html` in `views`:

```html
    < !DOCTYPE html >
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <title>URL Shortener</title>
            </head>
            <body>
                <h1>URL Shortener</h1>
                <form id="urlForm">
                    <input
                        type="text"
                        id="originalUrl"
                        placeholder="Enter URL to shorten"
                        required
                    />
                    <button type="submit">Shorten URL</button>
                </form>
                <ul id="urlList"></ul>
                <script src="/script.js"></script>
            </body>
        </html>
```

2. Create `script.js` in `public`:
```javascript
document.getElementById('urlForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const originalUrl = document.getElementById('originalUrl').value;

    try {
        const response = await fetch('/api/shorten', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ originalUrl })
        });
        const data = await response.json();
        console.log(data);
        displayUrl(data.shortId, originalUrl);
    } catch (error) {
        console.error("Error:", error);
    }
});

function displayUrl(shortUrl, originalUrl) {
    const urlList = document.getElementById('urlList');
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href="/api/${shortUrl}" target="_blank">${shortUrl}</a> - ${originalUrl}`;
    urlList.appendChild(listItem);
}

function getAllUrls() {

}
```

3. Serve HTML and static files in `server.js`:

```javascript
app.use(express.static(path.join(__dirname, '/public')));
```

## Conclusion

This README has all steps to build a URL shortener using Node.js, MongoDB, Mongoose, and the `nanoid` package.
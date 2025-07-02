const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));


// NOTE: In production (Netlify), backend API logic is handled by Netlify serverless functions in netlify/functions/search.js
// All hero/fictional data and endpoints removed.
// For local development, you may implement a proxy or mock here if needed.

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/heroes', (req, res) => {
  res.json([]);
});

app.get('/api/search', (req, res) => {
  res.json([]);
});

app.get('/api/classes', (req, res) => {
  res.json([]);
});

app.listen(PORT, () => {
  console.log(`Heroic Search Tool running on http://localhost:${PORT}`);
});
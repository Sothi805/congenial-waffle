const express = require('express');
const db = require('./db'); // Ensure this path is correct based on your project structure

const app = express();
const PORT = 3000;

// Example API endpoint
app.get('/data', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

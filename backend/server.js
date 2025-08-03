const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Hello, ChantMuse!');
});

// GET all chants
app.get('/api/chants', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM chant');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching chants:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST new chant
app.post('/api/chants', async (req, res) => {
  const { title, gabc, mode } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO chant (title, gabc, mode) VALUES (?, ?, ?)',
      [title, gabc, mode]
    );
    res.status(201).json({ id: result.insertId });
  } catch (err) {
    console.error('Error adding chant:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'coursbd'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
    return;
  }
  console.log('Connected to MySQL database.');
});

// User Signup
app.post('/signup', (req, res) => {
  const { email, password, role } = req.body;

  if (!role) {
    return res.status(400).json({ error: 'Role is required.' });
  }
  
  const query = 'INSERT INTO users (email, password, role) VALUES (?, ?, ?)';
  console.log('Query Parameters:', [email, password, role]); // Debugging: Log query parameters

  db.query(query, [email, password, role], (err) => {
    if (err) {
      console.error('Error creating user:', err);
      res.status(500).json({ error: 'Error creating user.' });
      return;
    }
    res.status(201).json({ message: 'User registered successfully!' });
  });
});

// User Signin
app.post('/signin', (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(query, [email, password], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error signing in.' });
      return;
    }
    if (results.length > 0) {
      const user = results[0];
      res.status(200).json({ role: user.role });
    } else {
      res.status(401).json({ error: 'Invalid credentials.' });
    }
  });
});

// Create Course
app.post('/courses', (req, res) => {
  const { title, description, date, teacher, className, pdfUrl } = req.body;
  const query = `INSERT INTO courses (title, description, date, teacher, className, pdfUrl) 
                 VALUES (?, ?, ?, ?, ?, ?)`;
  db.query(query, [title, description, date, teacher, className, pdfUrl], (err) => {
    if (err) {
      res.status(500).json({ error: 'Error creating course.' });
      return;
    }
    res.status(201).json({ message: 'Course created successfully!' });
  });
});

// Get Courses
app.get('/courses', (req, res) => {
  const query = 'SELECT * FROM courses';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error fetching courses.' });
      return;
    }
    res.status(200).json(results);
  });
});

// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';

const app = express();
app.use(cors());
app.use(express.json());

const pool = await mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '3826',
  database: 'tybcafsd29',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

app.get('/', async (req, res) => {
  res.json({ status: 'backend ok' });
});

app.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: 'Please enter email and password' });

    const [exists] = await pool.execute('SELECT id FROM NewUsers WHERE email = ?', [email]);
    if (exists.length > 0) return res.status(409).json({ message: 'Email already exists' });

    const [result] = await pool.execute(
      'INSERT INTO NewUsers (name, email, password) VALUES (?, ?, ?)',
      [name || null, email, password]
    );
    return res.status(201).json({ message: 'Signup successful', userId: result.insertId });

  } catch (err) {
    console.error('Database insert error', err);
    return res.status(500).json({ message: 'Database insert error', detail: err.message });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: 'Please enter email and password' });

    const [rows] = await pool.execute(
      'SELECT id, name, email, password FROM NewUsers WHERE email = ? AND password = ?',
      [email, password]
    );

    if (rows.length === 0) return res.status(401).json({ message: 'Invalid credentials' });

    const user = rows[0];
    return res.json({
      message: 'Login successful',
      user: { id: user.id, name: user.name, email: user.email }
    });

  } catch (err) {
    console.error('POST /login error', err);
    return res.status(500).json({ message: 'Database error' });
  }
});

app.get('/users', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT id, name, email FROM NewUsers ORDER BY id DESC');
    return res.json(rows);
  } catch (err) {
    console.error('GET /users error', err);
    return res.status(500).json({ message: 'Database error' });
  }
});

app.get('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.execute('SELECT id, name, email FROM NewUsers WHERE id = ?', [id]);
    if (rows.length === 0) return res.status(404).json({ message: 'User not found' });
    return res.json(rows[0]);
  } catch (err) {
    console.error('GET /users/:id error', err);
    return res.status(500).json({ message: 'Database error' });
  }
});

app.put('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;
    if (!name && !email && !password) return res.status(400).json({ message: 'Nothing to update' });

    await pool.execute(
      'UPDATE NewUsers SET name = COALESCE(?, name), email = COALESCE(?, email), password = COALESCE(?, password) WHERE id = ?',
      [name || null, email || null, password || null, id]
    );

    return res.json({ message: 'User updated' });
  } catch (err) {
    console.error('PUT /users/:id error', err);
    return res.status(500).json({ message: 'Database error' });
  }
});

app.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.execute('DELETE FROM NewUsers WHERE id = ?', [id]);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'User not found' });
    return res.json({ message: 'User deleted' });
  } catch (err) {
    console.error('DELETE /users/:id error', err);
    return res.status(500).json({ message: 'Database error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

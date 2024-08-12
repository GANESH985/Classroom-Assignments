const jwt = require('jsonwebtoken')
require('dotenv').config()

exports.login = (req, res) => {
  const { username, password } = req.body
  if (username !== process.env.USERNAME || password !== process.env.PASSWORD) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }
  const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token })
};

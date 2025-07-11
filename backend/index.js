// backend/index.js
const express = require('express');
const cors = require('cors');
// Untuk sementara kita ambil dari data.js. Nanti ini akan dihapus.
const { educationHistory, skills, projects } = require('./data.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Endpoint untuk mendapatkan data pendidikan
app.get('/api/education', (req, res) => {
  res.json(educationHistory);
});

// Endpoint untuk mendapatkan data skill
app.get('/api/skills', (req, res) => {
  res.json(skills);
});

// Endpoint untuk mendapatkan data proyek
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

// Start server untuk development
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
  });
}

// Baris ini penting agar Vercel bisa menjalankan backend Anda
module.exports = app;
const express = require('express');
const cors = require('cors');
const serverRoutes = require('./routes/serverRoutes');

const app = express();
const PORT = 5000;

app.use(cors());
app.use('/api', serverRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());  // Enable CORS for all requests

// Routes
const bfhlRoutes = require('./routes/bfhl');
app.use('/bfhl', bfhlRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

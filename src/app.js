const express = require('express');
const userRoutes = require('./routes/user.route');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

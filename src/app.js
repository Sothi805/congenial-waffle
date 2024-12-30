const express = require('express');
const cors = require('cors');
const app = express();
const userRoutes = require('./routes/userRoute'); // Import the routes

app.use(cors());
app.use(express.json());

// Register routes
app.use('/api/users', userRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

const express = require('express');
const app = express();
const path = require('path');
const { connectDB } = require('./src/Config/config');
const resourceRoutes = require('./src/routes/ResourceRoutes');
const userRoutes = require('./src/routes/UserRoutes');


app.use(express.json());
app.use(express.static(path.join(__dirname, 'src/Views')));
app.use('/resources', resourceRoutes);
app.use('/users', userRoutes);

PORT = 3001;

connectDB();

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
const express = require('express');
const app = express();
const path = require('path');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { type } = require('os');
const User = require('./src/Models/UserModel');
const { connectDB } = require('./src/Config/config');
const resourceRoutes = require('./src/routes/ResourceRoutes');
//const userRoutes = require('./src/routes/UserRoutes');


app.use(express.json());
app.use(express.static(path.join(__dirname, 'src/Views')));


const users = [];
const JWT_SECRET = 'clave_secreta';
const url = 'mongodb://localhost:27017/recursos-digitales';
PORT = 3001;

connectDB();

app.post('/register',  async(req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();
    console.log("usuario:" + email + " contraseña:" + password);
    res.json({ message: 'Registro exitoso' }).status(200);
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: 'Credenciales inválidas' });
    }
    const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});


app.use('/resources', resourceRoutes);
//app.use('/api/users', userRoutes);

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
const express = require('express');
const app = express();
const path = require('path');
const jwt = require('jsonwebtoken');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { type } = require('os');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'frontend')));

const users = [];
const JWT_SECRET = 'clave_secreta';
const url = 'mongodb://localhost:27017/pfpw';

mongoose.connect(url)
    .then(() => console.log('Conexión a la base de datos establecida'))
    .catch(err => console.log(err));


const User = new mongoose.model('user',{
    email: {type: String, unique: true},
    password: String
});
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

const auth = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Token requerido' });  
    try { 
        req.user = jwt.verify(token, JWT_SECRET);
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
};

app.get('/private', auth, (req, res) => {
    res.json({ message: 'Área privada', user: req.user });
});

app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));
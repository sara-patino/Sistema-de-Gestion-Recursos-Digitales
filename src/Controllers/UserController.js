const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Models/UserModel'); 
const JWT_SECRET = 'clave_secreta'; 


exports.createUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Encriptar la contraseña
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({ email, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'Usuario creado exitosamente', user });
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ error: 'El email ya está registrado' });
        } else {
            res.status(500).json({ error: 'Error al crear el usuario' });
        }
    }
};

// Leer todos los usuarios
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
};

// Leer un usuario por ID
exports.getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
};

// Actualizar un usuario por ID
exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { email, password } = req.body;

        // Si la contraseña se está actualizando, encriptarla
        let hashedPassword;
        if (password) {
            const salt = await bcrypt.genSalt(10);
            hashedPassword = await bcrypt.hash(password, salt);
        }

        const updatedUser = await User.findByIdAndUpdate(
            id,
            { email, password: hashedPassword || undefined },
            { new: true, runValidators: true }
        );
        if (!updatedUser) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.status(200).json({ message: 'Usuario actualizado exitosamente', updatedUser });
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ error: 'El email ya está registrado' });
        } else {
            res.status(500).json({ error: 'Error al actualizar el usuario' });
        }
    }
};

// Eliminar un usuario por ID
exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.status(200).json({ message: 'Usuario eliminado exitosamente', deletedUser });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
};

// Login de usuario (autenticación)
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Buscar al usuario por el email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        // Comparar la contraseña
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Contraseña incorrecta' });
        }

        // Crear el JWT
        const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'Autenticación exitosa', token });
    } catch (error) {
        res.status(500).json({ error: 'Error al autenticar al usuario' });
    }
};

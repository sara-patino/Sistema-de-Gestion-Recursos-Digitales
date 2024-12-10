const express = require('express');
const router = express.Router();
const userController = require('../Controllers/UserController');

// Rutas para registro y autenticación
router.post('/register', userController.createUser); // Registrar un nuevo usuario
router.post('/login', userController.login); // Iniciar sesión

// Rutas CRUD
router.get('/getAll', userController.getUsers); // Obtener todos los usuarios
router.get('/get/:id', userController.getUserById); // Obtener un usuario por ID
router.put('/update/:id', userController.updateUser); // Actualizar usuario
router.delete('/delete/:id', userController.deleteUser); // Eliminar usuario


module.exports = router;

const express = require('express');
const router = express.Router();
const userController = require('../Controllers/UserController');

// Rutas para registro y autenticación
router.post('/register', userController.createUser); // Registrar un nuevo usuario
router.post('/login', userController.login); // Iniciar sesión

// Rutas CRUD
router.post('/create', userController.createResource);
router.get('/getAll', userController.getResources);
router.get('/:id', userController.getResourceById);
router.put('/:id', userController.updateResource);
router.delete('/:id', userController.deleteResource);

module.exports = router;

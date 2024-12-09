const express = require('express');
const router = express.Router();
const resourceController = require('../Controllers/ResourceController');

// Rutas CRUD
router.post('/create', resourceController.createResource);
router.get('/getAll', resourceController.getResources);
router.get('/get/:id', resourceController.getResourceById);
router.put('/update/:id', resourceController.updateResource);
router.delete('/delete/:id', resourceController.deleteResource);

module.exports = router;

const express = require('express');
const router = express.Router();
const resourceController = require('../Controllers/ResourceController');
const auth = require('../middleware/Auth');

// Rutas CRUD
router.post('/create', auth, resourceController.createResource);
router.get('/getAll', resourceController.getResources);
router.get('/get/:id', resourceController.getResourceById);
router.put('/update/:id', auth, resourceController.updateResource);
router.delete('/delete/:id', auth, resourceController.deleteResource);

module.exports = router;

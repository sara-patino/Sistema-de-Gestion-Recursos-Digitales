const express = require('express')
const { createUser, getUsers, getUserById, updateUser, deleteUser, } = require('../Controllers/UserController')

const router = express.Router()

console.log("[starting...][StudentRoutes]")


router.post('/create', createUser)
router.get('/getAll', getUsers);
router.get('/get/:id', getUserById)
router.put('/update/:id', updateUser)
router.delete('/delete/:id', deleteUser)

module.exports = router
console.log("[end][StudentRoutes]")

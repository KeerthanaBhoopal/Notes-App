const express=require('express')
const router=express.Router()
const {authenticateUser} = require('../app/middlewares/authentication')

const categoriesController=require('../app/controllers/categoriesController')
router.get('/category', categoriesController.list)
router.post('/category',categoriesController.create)
router.get('/category/:id',categoriesController.show)
router.put('/category/:id',categoriesController.update)
router.delete('/category/:id',categoriesController.destroy)
const notesController=require('../app/controllers/notesController')
router.get('/notes',authenticateUser, notesController.list)
router.post('/notes', authenticateUser, notesController.create)
router.put('/notes/:id',authenticateUser, notesController.update)
router.get('/notes/:id',authenticateUser, notesController.show)
router.delete('/notes/:id',authenticateUser, notesController.destroy)

// const usersController= require('../app/controllers/UserController')
// router.post('/register', usersController)
// router.post('/login', usersController)


module.exports=router
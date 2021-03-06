const indexRouter = require('express').Router()
const indexModel = require('../models/index.model')
const controller=require('../controllers/index.controller')
const NotesController=require('../controllers/notes2.controller')
const validation=require('../controllers/validation.controller')
const isLoggedIn=require('../middleware/auth')
indexRouter.get('/',controller.signup )
indexRouter.get('/signup',controller.signup )
indexRouter.post('/handleSignUp',validation.signupValidation,controller.handleSignUp )
indexRouter.get('/signin',controller.signin )
indexRouter.post('/handleSignin',controller.handleSignin )
indexRouter.get('/home',isLoggedIn,controller.home )
indexRouter.post('/addNote',isLoggedIn,NotesController.addNote )
indexRouter.get('/logout',controller.logout )
indexRouter.get('*',controller.notfound )




module.exports = indexRouter
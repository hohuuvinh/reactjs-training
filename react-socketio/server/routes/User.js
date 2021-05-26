const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user')

// const {validateParam, schemas} = require('../helpers/routerHelpers')

router.route('/')
.get(UserController.getAll)
.post(UserController.newUser)
.patch()
.put()
.delete()

router.route('/:userID')
.get(UserController.getUser)
.put(UserController.replaceUser)
.patch(UserController.updateUser)

router.route('/:userID/decks')
.get(UserController.getUserDecks)
.post(UserController.newDeck)
module.exports = router